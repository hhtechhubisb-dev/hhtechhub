// src/pages/ProjectQuotes.jsx

import React, { useEffect, useState } from 'react';
import { fetchQuotes, deleteQuote } from '../apiservice/getquoteservices';
import { motion } from 'framer-motion';
import { Trash2, X, FileText, User, Mail, Calendar } from 'lucide-react';

export default function ProjectQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const loadQuotes = async () => {
    setLoading(true);
    try {
      const data = await fetchQuotes();
      setQuotes(data);
    } catch (err) {
      console.error('Error loading quotes:', err.message);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this quote?')) return;
    try {
      await deleteQuote(id);
      loadQuotes();
    } catch (err) {
      console.error('Error deleting quote:', err.message);
    }
  };

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">📦 Project Quotes</h1>
          <p className="text-gray-500 text-sm mt-1">View and manage submitted project quotes</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={loadQuotes}
          className="bg-orange-500 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-orange-400 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Refresh
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
          {quotes.map((quote) => (
            <motion.div
              key={quote.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="w-full h-full p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-orange-300/30 overflow-hidden relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg blur-sm"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-orange-100/50 rounded-lg">
                        <FileText size={20} className="text-orange-600" />
                      </div>
                      <span
                        className="font-semibold text-gray-900 text-lg cursor-pointer hover:text-orange-500 transition-colors"
                        onClick={() => {
                          setSelectedQuote(quote);
                          setShowModal(true);
                        }}
                      >
                        {quote.project_name}
                      </span>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-orange-500/10 text-orange-600 border-orange-500/30">
                      New
                    </span>
                  </div>

                  {quote.file_urls?.[0] && (
                    <img
                      src={quote.file_urls[0]}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-md my-3"
                    />
                  )}

                  <div className="mt-3 space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                      <User size={16} className="mt-0.5 flex-shrink-0 text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-400">Client</p>
                        <p className="font-medium text-gray-700">{quote.full_name}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail size={16} className="mt-0.5 flex-shrink-0 text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="font-medium text-gray-700">{quote.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar size={16} className="mt-0.5 flex-shrink-0 text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-400">Submitted</p>
                        <p className="font-medium text-gray-700">{formatDate(quote.created_at)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p
                      className="text-gray-700 line-clamp-2 text-sm cursor-pointer hover:text-orange-500 transition-colors"
                      onClick={() => {
                        setSelectedQuote(quote);
                        setShowModal(true);
                      }}
                    >
                      {quote.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100/50 flex justify-between items-center">
                    <button
                      onClick={() => {
                        setSelectedQuote(quote);
                        setShowModal(true);
                      }}
                      className="text-xs font-medium text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      View details →
                    </button>
                    <button
                      onClick={() => handleDelete(quote.id)}
                      className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {showModal && selectedQuote && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-2xl font-semibold text-gray-900">Quote Details</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">PROJECT INFORMATION</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gray-400">Project Name</p>
                        <p className="mt-1 text-gray-700 font-medium">{selectedQuote.project_name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Customer Type</p>
                        <p className="mt-1 text-gray-700 font-medium">{selectedQuote.customer_type}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Categories</p>
                        <p className="mt-1 text-gray-700 font-medium">
                          {selectedQuote.categories?.join(', ') || 'None'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">CLIENT DETAILS</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gray-400">Full Name</p>
                        <p className="mt-1 text-gray-700 font-medium">{selectedQuote.full_name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="mt-1 text-gray-700 font-medium">{selectedQuote.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Submitted At</p>
                        <p className="mt-1 text-gray-700">{formatDate(selectedQuote.created_at)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">PROJECT DESCRIPTION</h3>
                  <p className="text-gray-700 whitespace-pre-line">{selectedQuote.description}</p>
                </div>

                {selectedQuote.file_urls?.length > 0 && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">ATTACHED FILES</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedQuote.file_urls.map((url, i) => (
                        <img 
                          key={i} 
                          src={url} 
                          alt={`Attachment ${i + 1}`} 
                          className="rounded-md border object-cover w-full h-32" 
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end p-4 border-t border-gray-200 gap-3">
              <button
                onClick={() => {
                  handleDelete(selectedQuote.id);
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
              >
                Delete Quote
              </button>
              <button
                onClick={() => setShowModal(false)}
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