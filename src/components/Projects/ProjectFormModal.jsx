import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectFormModal = ({
  isEditing,
  newProject,
  setNewProject,
  imageFile,
  handleImageChange,
  removeImage,
  setRemoveImage,
  handleAddOrUpdate,
  resetForm
}) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            {isEditing ? 'Edit Project' : 'Add New Project'}
          </h2>
          <button
            onClick={resetForm}
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
                    <label className="block text-xs text-gray-400 mb-1">Project Name*</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newProject.name}
                      onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Technologies*</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newProject.Apps_Technologies}
                      onChange={(e) => setNewProject({ ...newProject, Apps_Technologies: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Status</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newProject.Status}
                      onChange={(e) => setNewProject({ ...newProject, Status: e.target.value })}
                    >
                      <option value="Pending">Pending</option>
                      <option value="InProgress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-3">CLIENT INFORMATION</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Client Name*</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newProject.client_Name}
                      onChange={(e) => setNewProject({ ...newProject, client_Name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Country*</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      value={newProject.country}
                      onChange={(e) => setNewProject({ ...newProject, country: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-3">PROJECT DESCRIPTION*</h3>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px]"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-3">KEY FEATURES</h3>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[80px]"
                value={newProject.Key_Features.join('\n')}
                onChange={(e) => setNewProject({ ...newProject, Key_Features: e.target.value.split('\n') })}
                placeholder="Enter each feature on a new line"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                PROJECT IMAGE {isEditing && '(optional)'}
              </h3>
              <div className="flex items-center space-x-4">
                <label className="flex-1">
                  <div className="border border-gray-300 border-dashed rounded-md px-4 py-3 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="text-sm text-gray-600">Choose file</span>
                    <span className="text-xs text-gray-500">or drag and drop</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </label>
                {newProject.project_image && !removeImage && (
                  <div className="relative">
                    <img 
                      src={newProject.project_image} 
                      alt="Current" 
                      className="h-16 w-16 rounded object-cover border" 
                    />
                    <button
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                      onClick={() => setRemoveImage(true)}
                    >
                      <X size={12} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end p-4 border-t border-gray-200 gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={resetForm}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleAddOrUpdate}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            {isEditing ? 'Update Project' : 'Add Project'}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProjectFormModal;