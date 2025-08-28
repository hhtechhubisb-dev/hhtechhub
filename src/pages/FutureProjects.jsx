import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import FutureProjectsService from "../apiservice/futureprojectsservice.js";
import FutureProjectCard from "../components/FutureProjects/FutureProjectCard.jsx";
import FutureProjectFormModal from "../components/FutureProjects/FutureProjectFormModal.jsx";
import FutureProjectDetailsModal from "../components/FutureProjects/FutureProjectDetailsModal.jsx";

const FutureProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    Apps_Technologies: "",
    Key_Features: [],
    country: "",
    client_Name: "",
    Status: "Low Priority",
    EstResources: 1,
    TimeDuration: "",
    fut_projectImage: ""
  });

  const durationOptions = [
    "1 week",
    "2 weeks",
    "3 weeks",
    "4 weeks",
    "5 weeks",
    "6 weeks",
    "7 weeks",
    "8 weeks",
    "9 weeks",
    "10 weeks",
  ];

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await FutureProjectsService.getAllProjects();
    if (error) {
      console.error("Error fetching projects:", error.message);
    } else {
      setProjects(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const getPriorityLabel = (priority) => {
    return (
      <motion.span
        whileHover={{ scale: 1.05 }}
        className={`text-xs font-semibold px-3 py-1 rounded-full ${
          priority === "Low Priority"
            ? "bg-blue-100/70 text-blue-800 border border-blue-200/50"
            : priority === "Medium Priority"
            ? "bg-yellow-100/70 text-yellow-800 border border-yellow-200/50"
            : "bg-red-100/70 text-red-800 border border-red-200/50"
        }`}
      >
        {priority}
      </motion.span>
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleAddProject = async () => {
    const {
      name,
      description,
      Apps_Technologies,
      Key_Features,
      country,
      client_Name,
      Status,
      EstResources,
      TimeDuration,
    } = newProject;

    if (!name || !description || !Apps_Technologies || !country || !client_Name) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      if (isEditing && currentProjectId) {
        const { error } = await FutureProjectsService.updateProject(
          currentProjectId,
          newProject,
          imageFile,
          removeImage
        );
        if (error) throw error;
      } else {
        const { error } = await FutureProjectsService.addProject(newProject, imageFile);
        if (error) throw error;
      }
      fetchProjects();
      resetForm();
    } catch (error) {
      console.error("Error saving project:", error.message);
    }
  };

  const handleDeleteProject = async (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const { error } = await FutureProjectsService.deleteProject(projectId);
      if (error) {
        console.error("Error deleting project:", error.message);
      } else {
        fetchProjects();
      }
    }
  };

  const handleEditProject = (project) => {
    setIsEditing(true);
    setCurrentProjectId(project.id);
    setNewProject({
      name: project.name,
      description: project.description,
      Apps_Technologies: project.Apps_Technologies,
      Key_Features: project.Key_Features || [],
      country: project.country,
      client_Name: project.client_Name,
      Status: project.Status || "Low Priority",
      EstResources: project.EstResources || 1,
      TimeDuration: project.TimeDuration || "",
      fut_projectImage: project.fut_projectImage || ""
    });
    setShowModal(true);
  };

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setShowDetailsModal(true);
  };

  const resetForm = () => {
    setNewProject({
      name: "",
      description: "",
      Apps_Technologies: "",
      Key_Features: [],
      country: "",
      client_Name: "",
      Status: "Low Priority",
      EstResources: 1,
      TimeDuration: "",
      fut_projectImage: ""
    });
    setImageFile(null);
    setRemoveImage(false);
    setIsEditing(false);
    setCurrentProjectId(null);
    setShowModal(false);
  };

  const handleAddKeyFeature = () => {
    setNewProject((prevProject) => ({
      ...prevProject,
      Key_Features: [
        ...prevProject.Key_Features,
        { title: "", description: "" },
      ],
    }));
  };

  const handleKeyFeatureChange = (index, field, value) => {
    const updatedKeyFeatures = [...newProject.Key_Features];
    updatedKeyFeatures[index][field] = value;
    setNewProject({ ...newProject, Key_Features: updatedKeyFeatures });
  };

  const removeKeyFeature = (index) => {
    const updatedKeyFeatures = [...newProject.Key_Features];
    updatedKeyFeatures.splice(index, 1);
    setNewProject({ ...newProject, Key_Features: updatedKeyFeatures });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Future Projects</h1>
          <p className="text-gray-500 mt-1 text-sm">Plan and prepare for upcoming initiatives</p>
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
          <Plus size={16} />
          Plan Project
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
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <FutureProjectCard
              key={project.id}
              project={project}
              onEdit={handleEditProject}
              onDelete={handleDeleteProject}
              onView={() => handleViewProject(project)}
              getPriorityLabel={getPriorityLabel}
            />
          ))}
        </motion.div>
      )}

      {showModal && (
        <FutureProjectFormModal
          isEditing={isEditing}
          newProject={newProject}
          setNewProject={setNewProject}
          imageFile={imageFile}
          setImageFile={setImageFile}
          removeImage={removeImage}
          setRemoveImage={setRemoveImage}
          handleAddProject={handleAddProject}
          resetForm={resetForm}
          durationOptions={durationOptions}
          handleAddKeyFeature={handleAddKeyFeature}
          handleKeyFeatureChange={handleKeyFeatureChange}
          removeKeyFeature={removeKeyFeature}
        />
      )}

      {showDetailsModal && selectedProject && (
        <FutureProjectDetailsModal
          project={selectedProject}
          onClose={() => setShowDetailsModal(false)}
          onDelete={handleDeleteProject}
          getPriorityLabel={getPriorityLabel}
        />
      )}
    </div>
  );
};

export default FutureProjects;