import { motion } from "framer-motion";
import { X, Plus as PlusIcon, Trash2 } from "lucide-react";

const FutureProjectFormModal = ({
  isEditing,
  newProject,
  setNewProject,
  imageFile,
  setImageFile,
  removeImage,
  setRemoveImage,
  handleAddProject,
  resetForm,
  durationOptions,
  handleAddKeyFeature,
  handleKeyFeatureChange,
  removeKeyFeature
}) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] flex flex-col">
        <div className="p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">
              {isEditing ? "Edit Project" : "Add New Future Project"}
            </h2>
            <button
              onClick={resetForm}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name*</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description*</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Technologies*</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={newProject.Apps_Technologies}
              onChange={(e) => setNewProject({ ...newProject, Apps_Technologies: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Client Name*</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={newProject.client_Name}
              onChange={(e) => setNewProject({ ...newProject, client_Name: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Country*</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={newProject.country}
              onChange={(e) => setNewProject({ ...newProject, country: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Priority</label>
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={newProject.Status}
              onChange={(e) => setNewProject({ ...newProject, Status: e.target.value })}
            >
              <option value="Low Priority">Low Priority</option>
              <option value="Medium Priority">Medium Priority</option>
              <option value="High Priority">High Priority</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Project Image</label>
            <div className="flex items-center space-x-4 mt-2">
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
              {newProject.fut_projectImage && !removeImage && (
                <div className="relative">
                  <img 
                    src={newProject.fut_projectImage} 
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

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Key Features</label>
            {newProject.Key_Features.map((feature, index) => (
              <div key={index} className="flex gap-3 mb-2">
                <input
                  type="text"
                  className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Feature title"
                  value={feature.title}
                  onChange={(e) => handleKeyFeatureChange(index, "title", e.target.value)}
                />
                <textarea
                  className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Feature description"
                  value={feature.description}
                  onChange={(e) => handleKeyFeatureChange(index, "description", e.target.value)}
                />
                <button
                  onClick={() => removeKeyFeature(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddKeyFeature}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400 mt-2 text-sm flex items-center gap-1"
            >
              <PlusIcon size={16} />
              Add Key Feature
            </motion.button>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Duration</label>
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={newProject.TimeDuration}
              onChange={(e) => setNewProject({ ...newProject, TimeDuration: e.target.value })}
            >
              <option value="">Select Duration</option>
              {durationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Estimated Resources</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={newProject.EstResources}
              onChange={(e) => setNewProject({ ...newProject, EstResources: e.target.value })}
              min="1"
              placeholder="Enter number of resources"
            />
          </div>
        </div>
        
        <div className="flex justify-between p-4 border-t border-gray-200 bg-white">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetForm}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddProject}
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400"
          >
            {isEditing ? "Update Project" : "Add Project"}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FutureProjectFormModal;