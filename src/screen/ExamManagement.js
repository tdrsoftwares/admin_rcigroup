import React, { useState } from "react";
import jsPDF from "jspdf";
import QRCode from "react-qr-code";

const ExamManagement = () => {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    course: "",
    marks: "",
    grade: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // 📄 Hall Ticket
  const printHallTicket = () => {
    const pdf = new jsPDF();

    pdf.text("Exam Hall Ticket", 70, 10);
    pdf.text(`Name: ${student.name}`, 10, 30);
    pdf.text(`Roll No: ${student.roll}`, 10, 40);
    pdf.text(`Course: ${student.course}`, 10, 50);

    pdf.save("hall-ticket.pdf");
  };

  // 📊 Marksheet
  const printMarksheet = () => {
    const pdf = new jsPDF();

    pdf.text("Marksheet", 80, 10);
    pdf.text(`Name: ${student.name}`, 10, 30);
    pdf.text(`Course: ${student.course}`, 10, 40);
    pdf.text(`Marks: ${student.marks}`, 10, 50);
    pdf.text(`Grade: ${student.grade}`, 10, 60);

    pdf.save("marksheet.pdf");
  };

  // 🎓 Certificate
  const printCertificate = () => {
    const pdf = new jsPDF();

    pdf.text("Certificate of Completion", 50, 20);
    pdf.text(
      `This is to certify that ${student.name}`,
      20,
      50
    );
    pdf.text(`has completed ${student.course}`, 20, 60);

    pdf.save("certificate.pdf");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4">Exam Management</h2>

        {/* STUDENT INPUT */}
        <div className="grid grid-cols-5 gap-3 mb-6">

          <input
            name="name"
            placeholder="Student Name"
            onChange={handleChange}
            className="border px-2 py-1 rounded"
          />

          <input
            name="roll"
            placeholder="Roll No"
            onChange={handleChange}
            className="border px-2 py-1 rounded"
          />

          <input
            name="course"
            placeholder="Course"
            onChange={handleChange}
            className="border px-2 py-1 rounded"
          />

          <input
            name="marks"
            placeholder="Marks"
            onChange={handleChange}
            className="border px-2 py-1 rounded"
          />

          <input
            name="grade"
            placeholder="Grade"
            onChange={handleChange}
            className="border px-2 py-1 rounded"
          />

        </div>

        {/* PREVIEW CARD */}
        <div className="border p-4 rounded mb-6 bg-gray-50">

          <h3 className="font-semibold mb-2">Preview</h3>

          <p><b>Name:</b> {student.name}</p>
          <p><b>Roll:</b> {student.roll}</p>
          <p><b>Course:</b> {student.course}</p>
          <p><b>Marks:</b> {student.marks}</p>
          <p><b>Grade:</b> {student.grade}</p>

          <div className="mt-3 flex justify-center">
            <QRCode value={student.roll || "NoData"} />
          </div>

        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-3 gap-3">

          <button
            onClick={printHallTicket}
            className="bg-blue-600 text-white py-2 rounded"
          >
            Hall Ticket
          </button>

          <button
            onClick={printMarksheet}
            className="bg-green-600 text-white py-2 rounded"
          >
            Marksheet
          </button>

          <button
            onClick={printCertificate}
            className="bg-purple-600 text-white py-2 rounded"
          >
            Certificate
          </button>

        </div>

      </div>
    </div>
  );
};

export default ExamManagement;