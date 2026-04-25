import React, { useState } from "react";

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);

  const [form, setForm] = useState({
    category: "",
    duration: "",
    name: "",
    syllabus: [],
  });

  const [syllabusInput, setSyllabusInput] = useState("");

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add syllabus item
  const addSyllabus = () => {
    if (!syllabusInput) return;
    setForm({
      ...form,
      syllabus: [...form.syllabus, syllabusInput],
    });
    setSyllabusInput("");
  };

  // Delete syllabus
  const deleteSyllabus = (index) => {
    const updated = form.syllabus.filter((_, i) => i !== index);
    setForm({ ...form, syllabus: updated });
  };

  // Add course
  const addCourse = () => {
    if (!form.name) return alert("Course name required");

    setCourses([...courses, form]);

    setForm({
      category: "",
      duration: "",
      name: "",
      syllabus: [],
    });
  };

  // Delete course
  const deleteCourse = (index) => {
    const updated = courses.filter((_, i) => i !== index);
    setCourses(updated);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4">Course Management</h2>

        {/* FORM */}
        <div className="grid grid-cols-4 gap-3 mb-4">

          {/* Category */}
          <div>
            <label className="text-sm">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded"
            >
              <option value="">Select</option>
              <option>Package</option>
              <option>Monthly</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="text-sm">Duration</label>
            <input
              name="duration"
              value={form.duration}
              onChange={handleChange}
              placeholder="e.g. 3 Months"
              className="w-full px-2 py-1 border rounded"
            />
          </div>

          {/* Course Name */}
          <div>
            <label className="text-sm">Course Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Course Name"
              className="w-full px-2 py-1 border rounded"
            />
          </div>

          {/* Add Button */}
          <div className="flex items-end">
            <button
              onClick={addCourse}
              className="w-full bg-blue-600 text-white py-1 rounded"
            >
              Add Course
            </button>
          </div>

        </div>

        {/* SYLLABUS */}
        <div className="mb-4">
          <label className="text-sm">Course Syllabus</label>

          <div className="flex gap-2 mt-1">
            <input
              value={syllabusInput}
              onChange={(e) => setSyllabusInput(e.target.value)}
              placeholder="Add topic"
              className="w-full px-2 py-1 border rounded"
            />
            <button
              onClick={addSyllabus}
              className="bg-green-600 text-white px-3 rounded"
            >
              +
            </button>
          </div>

          {/* List */}
          <ul className="mt-2">
            {form.syllabus.map((item, i) => (
              <li key={i} className="flex justify-between bg-gray-100 p-1 rounded mb-1">
                {item}
                <button
                  onClick={() => deleteSyllabus(i)}
                  className="text-red-500"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* COURSE TABLE */}
        <table className="w-full border mt-4">
          <thead className="bg-blue-200">
            <tr>
              <th className="border p-2">Category</th>
              <th className="border p-2">Duration</th>
              <th className="border p-2">Course Name</th>
              <th className="border p-2">Syllabus</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course, i) => (
              <tr key={i} className="text-center">
                <td className="border p-2">{course.category}</td>
                <td className="border p-2">{course.duration}</td>
                <td className="border p-2">{course.name}</td>
                <td className="border p-2 text-left">
                  <ul className="list-disc pl-4">
                    {course.syllabus.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => deleteCourse(i)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default CourseManagement;