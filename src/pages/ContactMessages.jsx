
import React, { useEffect, useState } from 'react';
import ContactUsService from '../apiservice/contactusservice.js';
import { Trash2, X, Mail, Phone, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactMessages() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const fetchAllContacts = async () => {
    setLoading(true);
    try {
      const all = await ContactUsService.fetchContacts();
      setContacts(all);
    } catch (err) {
      console.error('Failed to load contacts:', err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllContacts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact message?')) return;
    try {
      await ContactUsService.deleteContact(id);
      fetchAllContacts();
    } catch (err) {
      console.error('Delete failed:', err.message);
    }
  };

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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const showContactDetails = (contact) => {
    setSelectedContact(contact);
    setShowDetailsModal(true);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">📩 Contact Messages</h1>
          <p className="text-gray-500 text-sm mt-1">View and manage messages from your contacts</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={fetchAllContacts}
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
          {contacts.map((contact) => (
            <motion.div
              key={contact.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="w-full h-full p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-orange-300/30 overflow-hidden relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg blur-sm"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-blue-100/50 rounded-lg">
                        <User size={20} className="text-blue-600" />
                      </div>
                      <span
                        className="font-semibold text-gray-900 text-lg cursor-pointer hover:text-orange-500 transition-colors"
                        onClick={() => showContactDetails(contact)}
                      >
                        {contact.name}
                      </span>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-blue-500/10 text-blue-600 border-blue-500/30">
                      New
                    </span>
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-3">
                      <Mail size={16} className="mt-0.5 flex-shrink-0 text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="font-medium text-gray-700">{contact.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone size={16} className="mt-0.5 flex-shrink-0 text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-400">Phone</p>
                        <p className="font-medium text-gray-700">
                          +{contact.country_code} {contact.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-400">Received</p>
                        <p className="font-medium text-gray-700">{formatDate(contact.created_at)}</p>
                      </div>
                    </div>
                  </div>

                  {contact.subject && (
                    <div className="mt-4">
                      <p className="text-xs text-gray-400">Subject</p>
                      <p
                        className="text-gray-700 line-clamp-1 text-sm cursor-pointer hover:text-orange-500 transition-colors"
                        onClick={() => showContactDetails(contact)}
                      >
                        {contact.subject}
                      </p>
                    </div>
                  )}

                  <div className="mt-4">
                    <p
                      className="text-gray-700 line-clamp-2 text-sm cursor-pointer hover:text-orange-500 transition-colors"
                      onClick={() => showContactDetails(contact)}
                    >
                      {contact.message}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100/50 flex justify-between items-center">
                    <button
                      onClick={() => showContactDetails(contact)}
                      className="text-xs font-medium text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      View details →
                    </button>
                    <button
                      onClick={() => handleDelete(contact.id)}
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

      {showDetailsModal && selectedContact && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Details</h2>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">PERSONAL INFORMATION</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gray-400">Full Name</p>
                        <p className="mt-1 text-gray-700 font-medium">{selectedContact.name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="mt-1 text-gray-700 font-medium">{selectedContact.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Phone</p>
                        <p className="mt-1 text-gray-700 font-medium">
                          +{selectedContact.country_code} {selectedContact.phone}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">MESSAGE DETAILS</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gray-400">Received At</p>
                        <p className="mt-1 text-gray-700">{formatDate(selectedContact.created_at)}</p>
                      </div>
                      {selectedContact.subject && (
                        <div>
                          <p className="text-xs text-gray-400">Subject</p>
                          <p className="mt-1 text-gray-700">{selectedContact.subject}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">MESSAGE</h3>
                  <p className="text-gray-700 whitespace-pre-line">{selectedContact.message}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end p-4 border-t border-gray-200 gap-3">
              <button
                onClick={() => {
                  handleDelete(selectedContact.id);
                  setShowDetailsModal(false);
                }}
                className="px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
              >
                Delete Message
              </button>
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
