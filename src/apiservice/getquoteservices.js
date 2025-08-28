// ApiServices/getQuoteServices.js

import { supabase } from "../config/supabaseClient";

export const SubmitProjectQuote = async ({
  project_name,
  customer_type,
  categories,
  full_name,
  email,
  description,
  files,
}) => {
  const { data: insertedQuote, error: insertError } = await supabase
    .from("project_quotes")
    .insert([
      {
        project_name,
        customer_type,
        categories,
        full_name,
        email,
        description,
      },
    ])
    .select()
    .single();

  if (insertError) throw insertError;

  const uploadedUrls = [];

  for (const file of files) {
    const filePath = `${insertedQuote.id}/${file.name}`;

    const { data: storageData, error: storageError } = await supabase.storage
      .from("projectquote")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (storageError) {
      console.error("File upload error:", storageError.message);
      continue;
    }

    const { data: publicUrlData } = supabase.storage
      .from("projectquote")
      .getPublicUrl(filePath);

    if (publicUrlData?.publicUrl) {
      uploadedUrls.push(publicUrlData.publicUrl);
    }
  }

  const { error: updateError } = await supabase
    .from("project_quotes")
    .update({ file_urls: uploadedUrls })
    .eq("id", insertedQuote.id);

  if (updateError) throw updateError;

  return true;
};

export const fetchQuotes = async () => {
  const { data, error } = await supabase
    .from("project_quotes")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

export const deleteQuote = async (id) => {
  const { error } = await supabase
    .from("project_quotes")
    .delete()
    .eq("id", id);

  if (error) throw error;
};
