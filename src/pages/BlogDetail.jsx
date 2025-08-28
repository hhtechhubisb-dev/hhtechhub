import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogService from '../apiservice/BlogServices';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, X, ChevronLeft, ChevronRight } from 'lucide-react';

const BlogDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      setLoading(true);
      try {
        const allBlogs = await BlogService.fetchBlogs();
        const decodedTitle = decodeURIComponent(title);
        const foundBlog = allBlogs.find(b => b.title === decodedTitle);
        setBlog(foundBlog);
        
        // Get recent blogs (excluding current blog)
        const filteredBlogs = allBlogs.filter(b => b.title !== decodedTitle && b.published);
        setRecentBlogs(filteredBlogs.slice(0, 5)); // Get up to 5 recent blogs
      } catch (err) {
        console.error('Failed to load blog:', err);
      }
      setLoading(false);
    };

    fetchBlogDetails();
  }, [title]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === Math.ceil(recentBlogs.length / 3) - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(recentBlogs.length / 3) - 1 : prev - 1
    );
  };

  const calculateReadTime = (text) => {
    if (!text) return '1 min read';
    const wordCount = text.split(/\s+/).length;
    const wordsPerMinute = 200;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${Math.max(1, minutes)} min read`;
  };

  if (loading) {
    return (
      <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-orange-500 text-xl">Loading...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-orange-500 text-xl">Blog not found</div>
      </div>
    );
  }

  // Group recent blogs into slides (3 per slide)
  const slides = [];
  for (let i = 0; i < recentBlogs.length; i += 3) {
    slides.push(recentBlogs.slice(i, i + 3));
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto py-12 px-4 md:px-8"
      >
        {blog.cover_image_url && (
          <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-xl mb-12 shadow-lg">
            <motion.img
              src={blog.cover_image_url}
              alt={blog.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/90" />
          </div>
        )}
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="flex items-center gap-4 text-orange-500 mb-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <User size={18} />
              <span className="font-medium">{blog.author}</span>
            </div>
          </motion.div>
          
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {blog.title}
          </motion.h1>
          
          <motion.p
            className="text-xl text-orange-600 mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {blog.description}
          </motion.p>
          
          <motion.div
            className="prose max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {typeof blog.content === 'object' ? (
              <div>
                {blog.content.text && (
                  <p className="whitespace-pre-line text-gray-700">{blog.content.text}</p>
                )}
                {blog.content.blocks?.map((block, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                  >
                    {block.type === 'paragraph' && <p className="text-gray-700">{block.data.text}</p>}
                    {block.type === 'header' && (
                      <h2 className={`text-${block.data.level === 1 ? '2xl' : 'xl'} font-bold mt-8 mb-4 text-orange-500`}>
                        {block.data.text}
                      </h2>
                    )}
                    {block.type === 'list' && (
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {block.data.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="whitespace-pre-line text-gray-700">{blog.content}</p>
            )}
          </motion.div>
          
          {blog.tags?.length > 0 && (
            <motion.div
              className="mt-12 pt-6 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-sm font-semibold text-gray-500 mb-3">TAGS</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <motion.span 
                    key={index}
                    className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.9 + index * 0.05,
                      type: 'spring',
                      stiffness: 300
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Recent Blogs Slider */}
          {recentBlogs.length > 0 && (
            <motion.div 
              className="mt-20 pt-12 border-t border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-orange-500">More Articles</h3>
                <div className="flex gap-2">
                  <button 
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeft className="text-orange-500" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronRight className="text-orange-500" />
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {slides[currentSlide]?.map((blog, index) => (
                        <motion.div
                          key={blog.id}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="h-full"
                        >
                          <motion.article 
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col border border-gray-200 hover:border-orange-300 cursor-pointer"
                            onClick={() => navigate(`/blogs/${encodeURIComponent(blog.title)}`)}
                          >
                            {blog.cover_image_url && (
                              <div className="relative h-48 overflow-hidden">
                                <motion.img
                                  src={blog.cover_image_url}
                                  alt={blog.title}
                                  className="absolute inset-0 w-full h-full object-cover"
                                  initial={{ scale: 1 }}
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.5 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                              </div>
                            )}
                            <div className="p-6 flex-1 flex flex-col">
                              <div className="flex items-center gap-2 text-orange-500 mb-3">
                                <User size={14} />
                                <span className="text-sm font-medium">{blog.author}</span>
                              </div>
                              <h3 className="text-lg font-bold mb-3 line-clamp-2 text-gray-800">
                                {blog.title}
                              </h3>
                              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                                {blog.description}
                              </p>
                              <div className="flex justify-between items-center mt-auto">
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                  <Clock size={12} />
                                  <span>{calculateReadTime(blog.description)}</span>
                                </div>
                                <motion.div
                                  whileHover={{ x: 5 }}
                                  className="text-orange-500 flex items-center gap-1 text-sm font-medium"
                                >
                                  Read more <ArrowRight size={14} />
                                </motion.div>
                              </div>
                            </div>
                          </motion.article>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;