// components/QuoteNavbar.jsx

import React, { useState, useRef } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";
import clsx from "clsx";
import { SubmitProjectQuote } from "../apiservice/getquoteservices";

const PROJECT_CATEGORIES = [
  "Website Development",
  "Artificial Intelligence",
  "AR/VR App Development",
  "Android App",
  "Hybrid Mobile App",
  "iOS App",
  "UI/UX Design",
  "Video Ads",
  "Digital Marketing",
  "SEO",
  "Social Media Marketing",
  "POS System",
  "Ecommerce Website",
  "CRM Development",
  "ERP Solution",
  "Consultation",
  "Custom Software",
];

const QuoteNavbar = () => {
  const [projectName, setProjectName] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [categories, setCategories] = useState([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const toggleCategory = (cat) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    const filtered = selected.filter((f) => f.size <= 100 * 1024 * 1024);
    const next = [...files, ...filtered].slice(0, 5);
    setFiles(next);
  };

  const removeFile = (name) => {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!projectName || !customerType || !fullName || !email || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      await SubmitProjectQuote({
        project_name: projectName,
        customer_type: customerType,
        categories,
        full_name: fullName,
        email,
        description,
        files,
      });

      alert("Quote submitted successfully!");
      setProjectName("");
      setCustomerType("");
      setCategories([]);
      setFullName("");
      setEmail("");
      setDescription("");
      setFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to submit quote.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#1a1a2e] to-[#ff6b00]/30 pt-16 pb-24">
      <div className="max-w-5xl px-6 mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white md:text-5xl">
          Let’s Build Something Great
        </h1>
        <p className="mt-3 text-lg text-gray-300">
          Fill out the form and we’ll get back to you with a custom quote.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl px-8 py-10 mx-auto mt-12 bg-white shadow-2xl rounded-2xl"
      >
        <h2 className="text-3xl font-bold text-[#ff6b00] mb-8 flex items-center gap-2">
          <HiOutlineInformationCircle className="text-[#ff6b00]" />
          Get a Quote
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-semibold">
              Project Name *
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff6b00] outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold">
              Customer Type *
            </label>
            <select
              value={customerType}
              onChange={(e) => setCustomerType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff6b00] outline-none"
            >
              <option value="">Select</option>
              <option value="new">New Customer</option>
              <option value="existing">Existing Customer</option>
            </select>
          </div>
        </div>

        <div className="mt-8">
          <label className="block mb-3 text-sm font-semibold">
            Project Category
          </label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {PROJECT_CATEGORIES.map((cat) => {
              const active = categories.includes(cat);
              return (
                <button
                  type="button"
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={clsx(
                    "px-3 py-2 text-sm rounded-md border transition-all",
                    active
                      ? "bg-[#ff6b00] text-white border-[#ff6b00]"
                      : "bg-gray-100 text-gray-800 hover:border-[#ff6b00]"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 mt-10 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-semibold">
              Full Name *
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff6b00]"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold">
              Email Address *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff6b00]"
            />
          </div>
        </div>

        <div className="mt-8">
          <label className="block mb-2 text-sm font-semibold">
            Project Description *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your project"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff6b00]"
          />
        </div>

        <div className="mt-6">
          <label className="block mb-2 text-sm font-semibold">
            Additional Files
          </label>
          <input
            type="file"
            ref={fileInputRef}
            multiple
            onChange={handleFileChange}
          />
          <div className="flex flex-wrap gap-2 mt-3">
            {files.map((file) => (
              <div
                key={file.name}
                className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md"
              >
                <span>{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(file.name)}
                  className="text-sm text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-right">
          <button
            type="submit"
            disabled={submitting}
            className="group relative inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg text-white bg-[#ff6b00] hover:bg-orange-500 transition-all"
          >
            {submitting ? "Sending..." : "SEND"}
            <BsCheckCircleFill className="text-white transition-opacity opacity-0 group-hover:opacity-100" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteNavbar;
