// src/pages/Members.jsx
import React, { useEffect, useState } from "react";
import MembersService from "../apiservice/membersservices.js";
import { Edit, Trash2 } from "lucide-react";

const TeamMembers = () => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMemberId, setCurrentMemberId] = useState(null);
  const [newMember, setNewMember] = useState({
    name: "",
    designation: "",
    experience: "",
    imageFile: null,
    joining_date: "", // <-- Added
  });

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const data = await MembersService.fetchMembers();
      setMembers(data);
    } catch (err) {
      console.error("Error fetching members:", err.message);
    }
  };

  const handleAddOrUpdateMember = async () => {
    const { name, designation, experience, imageFile, joining_date } = newMember;

    if (!name || !designation || !experience || !joining_date) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      if (isEditing) {
        await MembersService.updateMember(currentMemberId, {
          name,
          designation,
          experience,
          imageFile,
        });
      } else {
        await MembersService.addMember({
          name,
          designation,
          experience,
          imageFile,
          joining_date,
        });
      }
      fetchMembers();
      resetForm();
    } catch (err) {
      console.error("Error saving member:", err.message);
    }
  };

  const handleEditMember = (member) => {
    setNewMember({
      name: member.name,
      designation: member.designation,
      experience: member.experience,
      imageFile: null,
      joining_date: member.joining_date?.split("T")[0] || "",
    });
    setCurrentMemberId(member.id);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDeleteMember = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        await MembersService.deleteMember(id);
        fetchMembers();
      } catch (err) {
        console.error("Error deleting member:", err.message);
      }
    }
  };

  const resetForm = () => {
    setNewMember({
      name: "",
      designation: "",
      experience: "",
      imageFile: null,
      joining_date: "", // <-- Reset
    });
    setCurrentMemberId(null);
    setIsEditing(false);
    setShowModal(false);
  };

  const filteredMembers = members.filter((member) =>
    member.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Members</h1>
          <p className="text-gray-500">Manage your team members and their access</p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-400 shadow"
        >
          <span className="mr-1">+</span> Add Member
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">👥 Team Members</h2>
        <p className="text-sm text-gray-500 mb-4">
          View and manage all team members in your organization
        </p>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {filteredMembers.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-12 text-gray-500">
            <div className="text-4xl mb-2">👥</div>
            <h3 className="font-semibold text-lg text-gray-700 mb-1">No members found</h3>
            <p className="text-sm">Get started by adding your first team member.</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {filteredMembers.map((member) => (
              <li
                key={member.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center gap-4">
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                  )}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditMember(member)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteMember(member.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div>
                    <p className="text-base font-medium text-gray-800">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.designation}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Joined: {new Date(member.joining_date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">
              {isEditing ? "Edit Member" : "Add New Member"}
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Designation</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={newMember.designation}
                onChange={(e) => setNewMember({ ...newMember, designation: e.target.value })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Experience (years)</label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={newMember.experience}
                onChange={(e) => setNewMember({ ...newMember, experience: e.target.value })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Joining Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={newMember.joining_date}
                onChange={(e) => setNewMember({ ...newMember, joining_date: e.target.value })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setNewMember({ ...newMember, imageFile: e.target.files[0] })
                }
                className="w-full"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={resetForm}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrUpdateMember}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400"
              >
                {isEditing ? "Update Member" : "Add Member"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMembers;
