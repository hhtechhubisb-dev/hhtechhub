import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectDetailsModal = ({ 
  selectedProject, 
  onClose, 
  onDelete,
  getStatusColor,
  getFeatureText 
}) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-2xl font-semibold text-gray-900">Project Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="space-y-6">
            {selectedProject.project_image && (
              <div className="mb-6">
                <img 
                  src={selectedProject.project_image} 
                  alt="Project" 
                  className="w-full h-auto max-h-64 object-contain rounded-lg border border-gray-200" 
                />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-3">PROJECT INFORMATION</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400">Project Name</p>
                    <p className="mt-1 text-gray-700 font-medium">{selectedProject.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Technologies</p>
                    <p className="mt-1 text-gray-700 font-medium">{selectedProject.Apps_Technologies}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Status</p>
                    <p className="mt-1 text-gray-700 font-medium">{selectedProject.Status}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-3">CLIENT INFORMATION</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400">Client Name</p>
                    <p className="mt-1 text-gray-700 font-medium">{selectedProject.client_Name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Country</p>
                    <p className="mt-1 text-gray-700 font-medium">{selectedProject.country}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-3">PROJECT DESCRIPTION</h3>
              <p className="text-gray-700 whitespace-pre-line">{selectedProject.description}</p>
            </div>

            {selectedProject.Key_Features && selectedProject.Key_Features.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-3">KEY FEATURES</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selectedProject.Key_Features.map((feature, index) => (
                    <li key={index}>{getFeatureText(feature)}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end p-4 border-t border-gray-200 gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onDelete}
            className="px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
          >
            Delete Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Close
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;