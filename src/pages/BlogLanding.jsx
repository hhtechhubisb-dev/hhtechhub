// src/pages/BlogLanding.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogService from '../apiservice/BlogServices';
import { useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";

const BlogLanding = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const navigate = useNavigate();

  // Fix for scroll container position
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.position = 'relative';
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  useEffect(() => {
    const fetchPublishedBlogs = async () => {
      setLoading(true);
      try {
        const allBlogs = await BlogService.fetchBlogs();
        setBlogs(allBlogs.filter(blog => blog.published));
      } catch (err) {
        console.error('Failed to load blogs:', err);
      }
      setLoading(false);
    };
    fetchPublishedBlogs();
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut",
        type: 'spring',
        stiffness: 100
      }
    })
  };

  const calculateReadTime = (text) => {
    const wordCount = text.split(/\s+/).length;
    const wordsPerMinute = 200; // Average reading speed
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${Math.max(1, minutes)} min read`; // Minimum 1 minute
  };

  const handleBlogClick = (blogTitle, e) => {
    const button = e.currentTarget;
    const card = button.closest('article');
    
    // Create and position the animated circle
    const circle = document.createElement('div');
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'rgba(249, 115, 22, 0.2)';
    circle.style.width = '0px';
    circle.style.height = '0px';
    circle.style.left = `${button.offsetLeft + button.offsetWidth/2}px`;
    circle.style.top = `${button.offsetTop + button.offsetHeight/2}px`;
    circle.style.transform = 'translate(-50%, -50%)';
    circle.style.zIndex = '10';
    card.appendChild(circle);

    // Animate the circle
    const animation = circle.animate([
      { width: '0px', height: '0px', opacity: 1 },
      { width: '200px', height: '200px', opacity: 0 }
    ], {
      duration: 500,
      easing: 'ease-out'
    });

    animation.onfinish = () => {
      card.removeChild(circle);
      navigate(`/blogs/${encodeURIComponent(blogTitle)}`);
    };
  };

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100"
        style={{
          scale: heroScale,
          opacity: heroOpacity
        }}
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')] opacity-20"></div>
        </div>
        
        <motion.div 
          className="relative z-20 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700"
            variants={textVariants}
          >
            HH TECH BLOGS
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-orange-800/80 max-w-2xl mx-auto"
            variants={textVariants}
          >
            Cutting-edge technology insights and innovation stories
          </motion.p>
          <motion.div
            variants={textVariants}
            className="mt-12"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-orange-600"
            >
              <ChevronDown size={48} className="mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Content Section */}
      <motion.section 
        className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto"
        style={{
          opacity: contentOpacity
        }}
      >
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i} 
                className="bg-gray-100 rounded-xl h-96"
                initial={{ opacity: 0.5 }}
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } 
                }}
              />
            ))}
          </div>
        ) : (
          <>
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center text-gray-900"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Latest <span className="text-orange-500">Articles</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, i) => (
                <motion.article
                  key={blog.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group cursor-pointer relative"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-200 hover:border-orange-300">
                    {blog.cover_image_url && (
                      <div className="relative pt-[56.25%] overflow-hidden">
                        <motion.img
                          src={blog.cover_image_url}
                          alt={blog.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-orange-500 mb-3">
                        <User size={16} />
                        <span className="text-sm font-medium">{blog.author}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                        {blog.description}
                      </p>
                      <div className="flex justify-between items-center mt-auto">
                        <button
                          onClick={(e) => handleBlogClick(blog.title, e)}
                          className="relative overflow-hidden px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 group-hover:translate-y-0 shadow-md hover:shadow-orange-200"
                        >
                          <span className="relative z-10 flex items-center gap-1">
                            Read More <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </button>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock size={14} />
                          <span>{calculateReadTime(blog.description)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </>
        )}
      </motion.section>
    </div>
  );
};

export default BlogLanding;