import { motion } from "framer-motion";
import { Calendar, Clock, Users, Trash2, Edit, Eye } from "lucide-react";

const FutureProjectCard = ({ 
  project, 
  onEdit, 
  onDelete,
  onView,
  getPriorityLabel 
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="h-full p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-orange-300/30 overflow-hidden relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg blur-sm"></div>

        <div className="relative z-10">
          {project.fut_projectImage && (
            <div className="mb-4 rounded-lg overflow-hidden cursor-pointer" onClick={onView}>
              <img
                src={project.fut_projectImage}
                alt="Project"
                className="w-full h-40 object-cover"
              />
            </div>
          )}
          
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100/50 rounded-lg">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11 11V5a1 1 0 012 0v6h6a1 1 0 010 2h-6v6a1 1 0 01-2 0v-6H5a1 1 0 010-2h6z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 cursor-pointer" onClick={onView}>
                {project.name}
              </h2>
            </div>
            {getPriorityLabel(project.Status)}
          </div>

          <p className="text-sm text-gray-600 mb-5 pl-11 cursor-pointer" onClick={onView}>
            {project.description}
          </p>

          <div className="space-y-3 text-sm text-gray-600 border-t border-gray-100/50 pt-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-500" />
              <div>
                <p className="text-xs text-gray-400">Start Date</p>
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

          <div className="flex justify-end gap-2 mt-4 border-t border-gray-100 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onView}
              className="flex items-center gap-1 text-sm bg-gray-50 text-gray-600 px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
            >
              <Eye size={14} />
              View
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onEdit(project)}
              className="flex items-center gap-1 text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-100 transition-colors"
            >
              <Edit size={14} />
              Edit
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onDelete(project.id)}
              className="flex items-center gap-1 text-sm bg-red-50 text-red-600 px-3 py-1.5 rounded-md hover:bg-red-100 transition-colors"
            >
              <Trash2 size={14} />
              Delete
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FutureProjectCard;