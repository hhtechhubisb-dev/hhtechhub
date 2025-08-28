// src/components/CreateBlog.jsx

import React, { useEffect, useState } from 'react';
import BlogService from '../apiservice/BlogServices';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CreateBlog({ onSuccess, existingBlog }) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [inlineImages, setInlineImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setSlug(existingBlog.slug);
      setDescription(existingBlog.description);
      setAuthor(existingBlog.author);
      setTags(existingBlog.tags.join(', '));
      setContent(JSON.stringify(existingBlog.content, null, 2));
      setPublished(existingBlog.published);
    }
  }, [existingBlog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      let coverUrl = existingBlog?.cover_image_url || null;
      if (coverImage) {
        coverUrl = await BlogService.uploadCoverImage(coverImage);
      }

      let inlineImageUrls = existingBlog?.inline_image_urls || [];
      if (inlineImages.length > 0) {
        for (const file of inlineImages) {
          const url = await BlogService.uploadInlineImage(file);
          inlineImageUrls.push(url);
        }
      }

      let parsedContent;
      try {
        parsedContent = JSON.parse(content);
      } catch {
        parsedContent = { text: content };
      }

      const blogData = {
        title,
        slug,
        description,
        author,
        cover_image_url: coverUrl,
        inline_image_urls: inlineImageUrls,
        content: parsedContent,
        tags: tags.split(',').map(tag => tag.trim()),
        published,
      };

      if (existingBlog) {
        await BlogService.updateBlog(existingBlog.id, blogData);
        setMessage('✅ Blog updated successfully!');
      } else {
        await BlogService.createBlog(blogData);
        setMessage('✅ Blog created successfully!');
      }

      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      setMessage(`❌ ${err.message}`);
    }

    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          {existingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h2>
      </div>

      {message && (
        <div className={`p-3 rounded-md ${message.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Slug</label>
          <input
            type="text"
            placeholder="Enter URL slug"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            placeholder="Enter author name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            placeholder="Enter blog description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Content (JSON or plain text)</label>
          <textarea
            placeholder="Enter blog content (JSON format preferred)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 font-mono text-sm"
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
          <input
            type="text"
            placeholder="e.g. technology, web development, design"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Cover Image</label>
          <div className="flex items-center gap-3">
            <label className="flex flex-col items-center justify-center w-full px-4 py-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setCoverImage(e.target.files[0])}
              />
              <span className="text-sm text-gray-500">
                {coverImage ? coverImage.name : 'Click to upload cover image'}
              </span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Inline Images</label>
          <div className="flex items-center gap-3">
            <label className="flex flex-col items-center justify-center w-full px-4 py-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => setInlineImages(Array.from(e.target.files))}
              />
              <span className="text-sm text-gray-500">
                {inlineImages.length > 0 
                  ? `${inlineImages.length} file(s) selected` 
                  : 'Click to upload multiple inline images'}
              </span>
            </label>
          </div>
        </div>

        <div className="flex items-center space-x-3 pt-2">
          <div className="flex items-center h-5">
            <input
              id="publish"
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
            />
          </div>
          <label htmlFor="publish" className="text-sm font-medium text-gray-700">
            Publish this blog post
          </label>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <motion.button
            type="button"
            onClick={() => onSuccess()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Cancel
          </motion.button>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-2.5 text-sm font-medium text-white rounded-md transition-colors ${
              loading ? 'bg-orange-400' : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {existingBlog ? 'Updating...' : 'Creating...'}
              </span>
            ) : existingBlog ? 'Update Blog' : 'Create Blog'}
          </motion.button>
        </div>
      </form>
    </div>
  );
}