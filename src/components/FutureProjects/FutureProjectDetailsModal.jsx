import { motion } from "framer-motion";
import { X, Calendar, Clock, Users, Code, MapPin, User } from "lucide-react";

const FutureProjectDetailsModal = ({ 
  project, 
  onClose,
  onDelete,
  getPriorityLabel
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
            {project.fut_projectImage && (
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={project.fut_projectImage}
                  alt="Project"
                  className="w-full h-64 object-cover"
                />
              </div>
            )}

            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
              {getPriorityLabel(project.Status)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-3">PROJECT INFORMATION</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-400">Created Date</p>
                      <p className="font-medium text-gray-700">
                        {new Date(project.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-400">Duration</p>
                      <p className="font-medium text-gray-700">
                        {project.TimeDuration || "Not specified"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-400">Resources</p>
                      <p className="font-medium text-gray-700">
                        {project.EstResources || "1"} people
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-3">CLIENT INFORMATION</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-400">Client Name</p>
                      <p className="font-medium text-gray-700">
                        {project.client_Name || "Not specified"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-400">Country</p>
                      <p className="font-medium text-gray-700">
                        {project.country || "Not specified"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-400">Technologies</p>
                      <p className="font-medium text-gray-700">
                        {project.Apps_Technologies || "Not specified"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 mb-3">DESCRIPTION</h4>
              <p className="text-gray-700 whitespace-pre-line">
                {project.description || "No description provided"}
              </p>
            </div>

            {project.Key_Features && project.Key_Features.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-3">KEY FEATURES</h4>
                <div className="space-y-3">
                  {project.Key_Features.map((feature, index) => (
                    <div key={index} className="pl-4 border-l-2 border-orange-300">
                      <h5 className="font-medium text-gray-800">
                        {feature.title || "Untitled Feature"}
                      </h5>
                      <p className="text-gray-600 text-sm mt-1">
                        {feature.description || "No description provided"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end p-4 border-t border-gray-200 gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              onDelete(project.id);
              onClose();
            }}
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

export default FutureProjectDetailsModal;