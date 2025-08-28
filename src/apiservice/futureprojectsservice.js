import { supabase } from "../config/supabaseClient";

const FutureProjectsService = {
  getAllProjects: async () => {
    const { data, error } = await supabase.from("FutureProjects").select("*");
    return { data, error };
  },

  addProject: async (project, imageFile) => {
    let projectData = { ...project };
    
    if (imageFile) {
      const filePath = `futureprojectimages/${Date.now()}_${imageFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("futureprojectimages")
        .upload(filePath, imageFile);
      
      if (uploadError) throw uploadError;
      
      const { data: { publicUrl } } = supabase.storage
        .from("futureprojectimages")
        .getPublicUrl(filePath);
      
      projectData.fut_projectImage = publicUrl;
    }

    const { data, error } = await supabase
      .from("FutureProjects")
      .insert([projectData])
      .select();
    
    return { data, error };
  },

  updateProject: async (id, project, imageFile, removeImage) => {
    let projectData = { ...project };
    
    if (removeImage) {
      projectData.fut_projectImage = null;
    } else if (imageFile) {
      const filePath = `futureprojectimages/${Date.now()}_${imageFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("futureprojectimages")
        .upload(filePath, imageFile);
      
      if (uploadError) throw uploadError;
      
      const { data: { publicUrl } } = supabase.storage
        .from("futureprojectimages")
        .getPublicUrl(filePath);
      
      projectData.fut_projectImage = publicUrl;
    }

    const { data, error } = await supabase
      .from("FutureProjects")
      .update(projectData)
      .eq("id", id)
      .select();
    
    return { data, error };
  },

  deleteProject: async (id) => {
    const { error } = await supabase
      .from("FutureProjects")
      .delete()
      .eq("id", id);
    
    return { error };
  }
};

export default FutureProjectsService;