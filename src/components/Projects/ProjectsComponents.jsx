// ProjectCard Component
export function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="border p-4 rounded shadow hover:bg-gray-50 cursor-pointer"
    >
      <h2 className="text-lg font-semibold">{project.title}</h2>
      <p className="text-sm">{project.description}</p>
    </div>
  );
}

// ProjectFormModal Component
export function ProjectFormModal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Project</h2>
        <form onSubmit={onSubmit}>
          {/* Add your form fields here */}
          <input className="border p-2 mb-4 w-full" placeholder="Title" />
          <textarea className="border p-2 mb-4 w-full" placeholder="Description" />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ProjectDetailsModal Component
export function ProjectDetailsModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="mt-2">{project.description}</p>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="px-4 py-2 border rounded">Close</button>
        </div>
      </div>
    </div>
  );
}
