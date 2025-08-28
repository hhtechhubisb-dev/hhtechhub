// src/ApiServices/MembersService.js
import { supabase } from '../config/supabaseClient';

class MembersService {
  static async fetchMembers() {
    const { data, error } = await supabase
      .from('Members')
      .select('*')
      .order('joining_date', { ascending: false });

    if (error) throw new Error(error.message);
    return data;
  }

  static async addMember({ name, designation, experience, imageFile, joining_date }) {
    let imageUrl = '';

    if (imageFile) {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { data, error: uploadError } = await supabase.storage
        .from('membersimages')
        .upload(fileName, imageFile);

      if (uploadError) throw new Error(uploadError.message);

      const { data: publicUrlData } = supabase.storage
        .from('membersimages')
        .getPublicUrl(fileName);

      imageUrl = publicUrlData.publicUrl;
    }

    const { error } = await supabase.from('Members').insert([
      {
        name,
        designation,
        experience: parseFloat(experience),
        image: imageUrl,
        joining_date,
      },
    ]);

    if (error) throw new Error(error.message);
  }

  static async updateMember(id, { name, designation, experience, imageFile }) {
    let updates = {
      name,
      designation,
      experience: parseFloat(experience),
    };

    if (imageFile) {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { data, error: uploadError } = await supabase.storage
        .from('membersimages')
        .upload(fileName, imageFile);

      if (uploadError) throw new Error(uploadError.message);

      const { data: publicUrlData } = supabase.storage
        .from('membersimages')
        .getPublicUrl(fileName);

      updates.image = publicUrlData.publicUrl;
    }

    const { error } = await supabase
      .from('Members')
      .update(updates)
      .eq('id', id);

    if (error) throw new Error(error.message);
  }

  static async deleteMember(id) {
    const { error } = await supabase.from('Members').delete().eq('id', id);
    if (error) throw new Error(error.message);
  }
}

export default MembersService;
