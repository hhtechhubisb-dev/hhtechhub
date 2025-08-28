// src/services/ProjectsService.js

import { supabase } from '../config/supabaseClient';

const BUCKET_NAME = 'projectsimages';

const uploadProjectImage = async (file) => {
  if (!file) return null;

  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file);

  if (uploadError) {
    console.error('Error uploading image:', uploadError.message);
    return null;
  }

  const { data: imageData } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);

  return imageData?.publicUrl || null;
};

const addProject = async (projectData, imageFile) => {
  let imageUrl = null;

  if (imageFile) {
    imageUrl = await uploadProjectImage(imageFile);
  }

  const { error } = await supabase.from('Projects').insert([
    {
      ...projectData,
      project_image: imageUrl || null,
    },
  ]);

  return error;
};

const updateProject = async (id, updatedData, imageFile, removeImage) => {
  let imageUrl = updatedData.project_image || null;

  if (removeImage) {
    imageUrl = null;
  } else if (imageFile) {
    imageUrl = await uploadProjectImage(imageFile);
  }

  const { error } = await supabase
    .from('Projects')
    .update({
      ...updatedData,
      project_image: imageUrl,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id);

  return error;
};

const deleteProject = async (id) => {
  const { error } = await supabase.from('Projects').delete().eq('id', id);
  return error;
};

const getAllProjects = async () => {
  const { data, error } = await supabase.from('Projects').select('*');
  return { data, error };
};

export const ProjectsService = {
  uploadProjectImage,
  addProject,
  updateProject,
  deleteProject,
  getAllProjects,
};
