import { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Eye, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectsService } from '../apiservice/projectsservice.js';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);

  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    Apps_Technologies: '',
    Key_Features: [],
    country: '',
    client_Name: '',
    Status: 'Pending',
    project_image: '',
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await ProjectsService.getAllProjects();
    if (!error) setProjects(data);
    setLoading(false);
  };

  const handleAddOrUpdate = async () => {
    const {
      name, description, Apps_Technologies, country, client_Name, Status,
    } = newProject;

    if (!name || !description || !Apps_Technologies || !country || !client_Name) {
      alert('Please fill all required fields');
      return;
    }

    const projectPayload = {
      name,
      description,
      Apps_Technologies,
      Key_Features: Array.isArray(newProject.Key_Features) 
        ? newProject.Key_Features.map(feature => 
            typeof feature === 'object' ? feature.title || feature.description || JSON.stringify(feature) : feature
          )
        : [],
      country,
      client_Name,
      Status,
      project_image: newProject.project_image,
    };

    let error;
    if (isEditing) {
      error = await ProjectsService.updateProject(currentProjectId, projectPayload, imageFile, removeImage);
    } else {
      error = await ProjectsService.addProject(projectPayload, imageFile);
    }

    if (error) {
      console.error('Error saving project:', error.message);
    } else {
      fetchProjects();
      resetForm();
    }
  };

  const handleEdit = (project) => {
    setNewProject({
      ...project,
      Key_Features: project.Key_Features || [],
    });
    setCurrentProjectId(project.id);
    setIsEditing(true);
    setImageFile(null);
    setRemoveImage(false);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this project?')) {
      const error = await ProjectsService.deleteProject(id);
      if (!error) fetchProjects();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };

  const resetForm = () => {
    setNewProject({
      name: '',
      description: '',
      Apps_Technologies: '',
      Key_Features: [],
      country: '',
      client_Name: '',
      Status: 'Pending',
      project_image: '',
    });
    setCurrentProjectId(null);
    setIsEditing(false);
    setImageFile(null);
    setRemoveImage(false);
    setShowModal(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'InProgress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const getFeatureText = (feature) => {
    if (typeof feature === 'string') return feature;
    if (typeof feature === 'object') {
      return feature.title || feature.description || JSON.stringify(feature);
    }
    return String(feature);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // ProjectCard Component
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

  // ProjectFormModal Component
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

  // ProjectDetailsModal Component
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

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">🚀 Projects</h1>
          <p className="text-gray-500 text-sm mt-1">Manage and track all your projects</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="bg-orange-500 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-orange-400 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Plus size={18} className="mr-1" />
          Add Project
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
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onView={() => {
                setSelectedProject(project);
                setShowDetailsModal(true);
              }}
              onEdit={() => handleEdit(project)}
              onDelete={() => handleDelete(project.id)}
              getStatusColor={getStatusColor}
            />
          ))}
        </motion.div>
      )}

      {showModal && (
        <ProjectFormModal
          isEditing={isEditing}
          newProject={newProject}
          setNewProject={setNewProject}
          imageFile={imageFile}
          handleImageChange={handleImageChange}
          removeImage={removeImage}
          setRemoveImage={setRemoveImage}
          handleAddOrUpdate={handleAddOrUpdate}
          resetForm={resetForm}
        />
      )}

      {showDetailsModal && selectedProject && (
        <ProjectDetailsModal
          selectedProject={selectedProject}
          onClose={() => setShowDetailsModal(false)}
          onDelete={() => {
            handleDelete(selectedProject.id);
            setShowDetailsModal(false);
          }}
          getStatusColor={getStatusColor}
          getFeatureText={getFeatureText}
        />
      )}
    </div>
  );
};

export default Projects;