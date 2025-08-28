import { motion } from 'framer-motion';
import { Edit, Trash2, Eye } from 'lucide-react';

const ProjectCard = ({ project, onView, onEdit, onDelete, getStatusColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="w-full h-full p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-orange-300/30 overflow-hidden relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg blur-sm"></div>
        <div className="relative z-10">
          {project.project_image && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <img
                src={project.project_image}
                alt="Project"
                className="w-full h-40 object-cover"
              />
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-orange-100/50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span
                className="font-semibold text-gray-900 text-lg cursor-pointer hover:text-orange-500 transition-colors"
                onClick={onView}
              >
                {project.name}
              </span>
            </div>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getStatusColor(project.Status)}`}>
              {project.Status}
            </span>
          </div>

          <div className="mt-5 space-y-3 text-sm text-gray-600">
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-xs text-gray-400">Technologies</p>
                <p className="font-medium text-gray-700">{project.Apps_Technologies}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <p className="text-xs text-gray-400">Client</p>
                <p className="font-medium text-gray-700">{project.client_Name}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-xs text-gray-400">Country</p>
                <p className="font-medium text-gray-700">{project.country}</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p
              className="text-gray-700 line-clamp-2 text-sm cursor-pointer hover:text-orange-500 transition-colors"
              onClick={onView}
            >
              {project.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100/50 flex justify-between items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onView}
              className="text-xs font-medium text-orange-500 hover:text-orange-600 transition-colors flex items-center"
            >
              View details <span className="ml-1">→</span>
            </motion.button>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onEdit}
                className="text-gray-500 hover:text-blue-500 p-1 rounded-full hover:bg-blue-50 transition-colors"
                title="Edit"
              >
                <Edit size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onDelete}
                className="text-gray-500 hover:text-red-500 p-1 rounded-full hover:bg-red-50 transition-colors"
                title="Delete"
              >
                <Trash2 size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;