// src/pages/Blogs.jsx

import React, { useEffect, useState } from 'react';
import BlogService from '../apiservice/BlogServices';
import CreateBlogModal from '../components/CreateBlog';
import { Plus, Edit, Trash2, ChevronDown, ChevronUp, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const fetchAllBlogs = async () => {
    setLoading(true);
    try {
      const all = await BlogService.fetchBlogs();
      setBlogs(all);
    } catch (err) {
      console.error('Failed to load blogs:', err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    try {
      await BlogService.deleteBlog(id);
      fetchAllBlogs();
    } catch (err) {
      console.error('Delete failed:', err.message);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getStatus = (published) => {
    return published 
      ? { label: 'Published', color: 'bg-green-500/10 text-green-600 border-green-500/30' }
      : { label: 'Draft', color: 'bg-blue-500/10 text-blue-600 border-blue-500/30' };
  };

  const showBlogDetails = (blog) => {
    setSelectedBlog(blog);
    setShowDetailsModal(true);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">📚 All Blogs</h1>
          <p className="text-gray-500 text-sm mt-1">Manage and publish your blog posts</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setSelectedBlog(null);
            setOpenModal(true);
          }}
          className="bg-orange-500 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-orange-400 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Plus size={16} />
          Add Blog
        </motion.button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-200 h-12 w-12"></div>
          </div>
        </div>
      ) : (
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogs.map((blog) => {
            const statusInfo = getStatus(blog.published);

            return (
              <motion.div 
                key={blog.id} 
                variants={item}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="w-full h-full p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-orange-300/30 overflow-hidden relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg blur-sm"></div>

                  <div className="relative z-10">
                    {blog.cover_image_url && (
                      <img
                        src={blog.cover_image_url}
                        alt={blog.title}
                        className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                        onClick={() => showBlogDetails(blog)}
                      />
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-blue-100/50 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                        <span 
                          className="font-semibold text-gray-900 text-lg cursor-pointer hover:text-orange-500 transition-colors"
                          onClick={() => showBlogDetails(blog)}
                        >
                          {blog.title}
                        </span>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                    </div>

                    <div className="mt-5 space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <div>
                          <p className="text-xs text-gray-400">Author</p>
                          <p className="font-medium text-gray-700">{blog.author || 'Unknown'}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <div>
                          <p className="text-xs text-gray-400">Tags</p>
                          <p className="font-medium text-gray-700">{blog.tags?.join(', ') || 'No tags'}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p 
                        className="text-gray-700 line-clamp-3 text-sm cursor-pointer hover:text-orange-500 transition-colors"
                        onClick={() => showBlogDetails(blog)}
                      >
                        {blog.description}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-6 pt-4 border-t border-gray-100/50 flex justify-between items-center">
                      <button 
                        onClick={() => showBlogDetails(blog)}
                        className="text-xs font-medium text-orange-500 hover:text-orange-600 transition-colors"
                      >
                        View details →
                      </button>
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => {
                            setSelectedBlog(blog);
                            setOpenModal(true);
                          }}
                          className="text-blue-500 hover:text-blue-700 p-1 rounded-full hover:bg-blue-50 transition-colors"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Modal for creating/editing a blog */}
      {openModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-2xl font-semibold">
                {selectedBlog ? 'Edit Blog' : 'Create New Blog'}
              </h2>
              <button 
                onClick={() => setOpenModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <CreateBlogModal
                existingBlog={selectedBlog}
                onSuccess={() => {
                  setOpenModal(false);
                  fetchAllBlogs();
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Blog Details Modal */}
      {showDetailsModal && selectedBlog && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-2xl font-semibold text-gray-900">{selectedBlog.title}</h2>
              <button 
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {selectedBlog.cover_image_url && (
                    <img
                      src={selectedBlog.cover_image_url}
                      alt={selectedBlog.title}
                      className="w-full h-64 object-cover rounded-lg shadow-sm"
                    />
                  )}
                  
                  <div className="prose max-w-none">
                    {typeof selectedBlog.content === 'object' ? (
                      <div>
                        {selectedBlog.content.text && (
                          <p className="whitespace-pre-line">{selectedBlog.content.text}</p>
                        )}
                        {selectedBlog.content.blocks?.map((block, index) => (
                          <div key={index} className="mb-4">
                            {block.type === 'paragraph' && <p>{block.data.text}</p>}
                            {block.type === 'header' && (
                              <h3 className={`text-${block.data.level === 1 ? '2xl' : block.data.level === 2 ? 'xl' : 'lg'} font-semibold`}>
                                {block.data.text}
                              </h3>
                            )}
                            {block.type === 'list' && (
                              <ul className="list-disc pl-5">
                                {block.data.items.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="whitespace-pre-line">{selectedBlog.content}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">BLOG DETAILS</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gray-400">Status</p>
                        <span className={`mt-1 text-xs font-medium px-2.5 py-1 rounded-full border ${getStatus(selectedBlog.published).color}`}>
                          {getStatus(selectedBlog.published).label}
                        </span>
                      </div>
                      
                      <div>
                        <p className="text-xs text-gray-400">Author</p>
                        <p className="mt-1 text-gray-700">{selectedBlog.author || 'Unknown'}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs text-gray-400">Description</p>
                        <p className="mt-1 text-gray-700">{selectedBlog.description}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs text-gray-400">Tags</p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {selectedBlog.tags?.map((tag, index) => (
                            <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {selectedBlog.inline_image_urls?.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-500 mb-3">MEDIA</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedBlog.inline_image_urls.map((imgUrl, index) => (
                          <img
                            key={index}
                            src={imgUrl}
                            alt={`Inline image ${index + 1}`}
                            className="w-full h-24 object-cover rounded"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end p-4 border-t border-gray-200">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

//this is a sample content structure for the blog content field
// It can be either plain text or a JSON structure for rich content.
// {
//   "blocks": [
//     { "type": "paragraph", "data": { "text": "This is the first paragraph." } },
//     { "type": "paragraph", "data": { "text": "This is the second paragraph with <strong>bold</strong> text." } }
//   ]
// }