// src/ApiServices/ContactUsService.js
import { supabase } from '../config/supabaseClient';

export default class ContactUsService {
  static async fetchContacts() {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching contacts:', error.message);
      throw error;
    }
  }

  static async deleteContact(id) {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error deleting contact:', error.message);
      throw error;
    }
  }
}
