import React, { useState } from "react";

const BatchManagement = () => {
  const [batches, setBatches] = useState([]);
  const [batchName, setBatchName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [selectedBatchIndex, setSelectedBatchIndex] = useState(null);

  // Create Batch
  const createBatch = () => {
    if (!batchName) return alert("Enter batch name");

    setBatches([
      ...batches,
      {
        name: batchName,
        students: [],
        whatsappLink: "",
      },
    ]);
    setBatchName("");
  };

  // Delete Batch
  const deleteBatch = (index) => {
    const updated = batches.filter((_, i) => i !== index);
    setBatches(updated);
  };

  // Rename Batch
  const renameBatch = (index) => {
    const newName = prompt("Enter new batch name");
    if (!newName) return;

    const updated = [...batches];
    updated[index].name = newName;
    setBatches(updated);
  };

  // Add Student
  const addStudent = () => {
    if (selectedBatchIndex === null || !studentName) return;

    const updated = [...batches];
    updated[selectedBatchIndex].students.push({
      name: studentName,
    });

    setBatches(updated);
    setStudentName("");
  };

  // Delete Student
  const deleteStudent = (batchIndex, studentIndex) => {
    const updated = [...batches];
    updated[batchIndex].students.splice(studentIndex, 1);
    setBatches(updated);
  };

  // Edit Student
  const editStudent = (batchIndex, studentIndex) => {
    const newName = prompt("Edit student name");
    if (!newName) return;

    const updated = [...batches];
    updated[batchIndex].students[studentIndex].name = newName;
    setBatches(updated);
  };

  // WhatsApp Group
  const setWhatsapp = (index) => {
    const link = prompt("Enter WhatsApp group link");
    if (!link) return;

    const updated = [...batches];
    updated[index].whatsappLink = link;
    setBatches(updated);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4">Batch Management</h2>

        {/* CREATE BATCH */}
        <div className="flex gap-2 mb-4">
          <input
            value={batchName}
            onChange={(e) => setBatchName(e.target.value)}
            placeholder="Batch Name (e.g. 2025 Batch)"
            className="w-full px-3 py-2 border rounded"
          />
          <button
            onClick={createBatch}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Create
          </button>
        </div>

        {/* SELECT BATCH */}
        <div className="mb-4">
          <label>Select Batch:</label>
          <select
            onChange={(e) => setSelectedBatchIndex(e.target.value)}
            className="w-full px-2 py-1 border rounded mt-1"
          >
            <option value="">Select</option>
            {batches.map((b, i) => (
              <option key={i} value={i}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        {/* ADD STUDENT */}
        {selectedBatchIndex !== null && (
          <div className="flex gap-2 mb-4">
            <input
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Student Name"
              className="w-full px-2 py-1 border rounded"
            />
            <button
              onClick={addStudent}
              className="bg-green-600 text-white px-4 rounded"
            >
              Add Student
            </button>
          </div>
        )}

        {/* BATCH LIST */}
        {batches.map((batch, i) => (
          <div key={i} className="border p-3 mb-4 rounded bg-gray-50">

            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{batch.name}</h3>

              <div className="flex gap-2">
                <button
                  onClick={() => renameBatch(i)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Rename
                </button>

                <button
                  onClick={() => setWhatsapp(i)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  WhatsApp
                </button>

                <button
                  onClick={() => deleteBatch(i)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>

            {/* WhatsApp Link */}
            {batch.whatsappLink && (
              <p className="text-sm text-blue-600 mb-2">
                {batch.whatsappLink}
              </p>
            )}

            {/* STUDENTS */}
            <table className="w-full border">
              <thead className="bg-blue-200">
                <tr>
                  <th className="border p-1">Student Name</th>
                  <th className="border p-1">Action</th>
                </tr>
              </thead>

              <tbody>
                {batch.students.map((student, sIndex) => (
                  <tr key={sIndex} className="text-center">
                    <td className="border p-1">{student.name}</td>
                    <td className="border p-1 flex justify-center gap-2">
                      <button
                        onClick={() => editStudent(i, sIndex)}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteStudent(i, sIndex)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        ))}

      </div>
    </div>
  );
};

export default BatchManagement;