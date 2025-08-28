// src/ApiServices/BlogServices.js

import { supabase } from '../config/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

const BLOGS_TABLE = 'blogs';
const IMAGE_BUCKET = 'blog-images';

const BlogService = {
  async uploadImage(file, folder) {
    if (!file) throw new Error('No file selected');
    const ext = file.name.split('.').pop();
    const fileName = `${folder}/${uuidv4()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from(IMAGE_BUCKET)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type,
      });

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from(IMAGE_BUCKET)
      .getPublicUrl(fileName);

    return data.publicUrl;
  },

  async uploadCoverImage(file) {
    return this.uploadImage(file, 'covers');
  },

  async uploadInlineImage(file) {
    return this.uploadImage(file, 'content');
  },

  async createBlog(blog) {
      if (typeof blog.published !== 'boolean') {
    blog.published = false; // default to draft
  }

    const { data, error } = await supabase
      .from(BLOGS_TABLE)
      .insert([blog])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateBlog(id, updates) {
    const { data, error } = await supabase
      .from(BLOGS_TABLE)
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteBlog(id) {
    const { error } = await supabase
      .from(BLOGS_TABLE)
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  },

  async fetchBlogs() {
    const { data, error } = await supabase
      .from(BLOGS_TABLE)
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }
};

export default BlogService;
