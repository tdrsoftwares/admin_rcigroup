import React, { useState } from "react";
import jsPDF from "jspdf";

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([]);
  const [staff, setStaff] = useState({
    name: "",
    role: "",
    mobile: "",
    salary: "",
  });

  const [attendance, setAttendance] = useState({});

  const totalDays = 30;

  // Handle input
  const handleChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  // Add Staff
  const addStaff = () => {
    if (!staff.name) return alert("Enter staff name");
    setStaffList([...staffList, staff]);
    setStaff({ name: "", role: "", mobile: "", salary: "" });
  };

  // Delete Staff
  const deleteStaff = (index) => {
    const updated = staffList.filter((_, i) => i !== index);
    setStaffList(updated);
  };

  // Attendance (Daily count system)
  const markAttendance = (index, status) => {
    const key = `${index}-${new Date().getDate()}`;

    setAttendance({
      ...attendance,
      [key]: status,
    });
  };

  // Count Present Days
  const countPresent = (index) => {
    let count = 0;
    for (let i = 1; i <= totalDays; i++) {
      if (attendance[`${index}-${i}`] === "Present") count++;
    }
    return count;
  };

  // Salary Calculation
  const calculateSalary = (index) => {
    const present = countPresent(index);
    const baseSalary = Number(staffList[index].salary);

    return Math.round((present / totalDays) * baseSalary);
  };

  // Salary Slip PDF
  const generateSalarySlip = (staff, index) => {
    const pdf = new jsPDF();

    const present = countPresent(index);
    const finalSalary = calculateSalary(index);

    pdf.text("Salary Slip", 80, 10);
    pdf.text(`Name: ${staff.name}`, 10, 30);
    pdf.text(`Role: ${staff.role}`, 10, 40);
    pdf.text(`Total Days: ${totalDays}`, 10, 50);
    pdf.text(`Present Days: ${present}`, 10, 60);
    pdf.text(`Final Salary: ₹${finalSalary}`, 10, 70);

    pdf.save(`${staff.name}-salary.pdf`);
  };

  // Appointment Letter PDF
  const generateAppointment = (staff) => {
    const pdf = new jsPDF();

    pdf.text("Appointment Letter", 60, 20);
    pdf.text(`Dear ${staff.name},`, 20, 50);
    pdf.text(
      `You are appointed as ${staff.role} in our organization.`,
      20,
      60
    );
    pdf.text(`Salary: ₹${staff.salary}`, 20, 70);

    pdf.save(`${staff.name}-appointment.pdf`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4">Staff Management</h2>

        {/* CREATE STAFF */}
        <div className="grid grid-cols-5 gap-3 mb-4">

          <input name="name" value={staff.name} onChange={handleChange}
            placeholder="Name" className="border px-2 py-1 rounded" />

          <input name="role" value={staff.role} onChange={handleChange}
            placeholder="Role" className="border px-2 py-1 rounded" />

          <input name="mobile" value={staff.mobile} onChange={handleChange}
            placeholder="Mobile" className="border px-2 py-1 rounded" />

          <input name="salary" value={staff.salary} onChange={handleChange}
            placeholder="Salary" className="border px-2 py-1 rounded" />

          <button onClick={addStaff}
            className="bg-blue-600 text-white rounded">
            Add Staff
          </button>

        </div>

        {/* STAFF TABLE */}
        <table className="w-full border">

          <thead className="bg-blue-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Salary</th>
              <th className="border p-2">Attendance</th>
              <th className="border p-2">Present Days</th>
              <th className="border p-2">Final Salary</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {staffList.map((s, i) => (
              <tr key={i} className="text-center">

                <td className="border p-2">{s.name}</td>
                <td className="border p-2">{s.role}</td>
                <td className="border p-2">{s.mobile}</td>
                <td className="border p-2">₹{s.salary}</td>

                {/* Attendance */}
                <td className="border p-2 flex justify-center gap-2">
                  <button
                    onClick={() => markAttendance(i, "Present")}
                    className="bg-green-500 text-white px-2 rounded"
                  >
                    P
                  </button>

                  <button
                    onClick={() => markAttendance(i, "Absent")}
                    className="bg-red-500 text-white px-2 rounded"
                  >
                    A
                  </button>
                </td>

                <td className="border p-2">
                  {countPresent(i)}
                </td>

                <td className="border p-2 text-green-600">
                  ₹{calculateSalary(i)}
                </td>

                {/* Actions */}
                <td className="border p-2 flex gap-2 justify-center">

                  <button
                    onClick={() => generateSalarySlip(s, i)}
                    className="bg-blue-600 text-white px-2 rounded"
                  >
                    Salary Slip
                  </button>

                  <button
                    onClick={() => generateAppointment(s)}
                    className="bg-purple-600 text-white px-2 rounded"
                  >
                    Appointment
                  </button>

                  <button
                    onClick={() => deleteStaff(i)}
                    className="bg-red-600 text-white px-2 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>

        {/* RECRUITMENT FORM (UNCHANGED) */}
        <div className="mt-6 border p-4 rounded bg-gray-50">
          <h3 className="font-semibold mb-2">Staff Recruitment Form</h3>

          <div className="grid grid-cols-3 gap-3">
            <input placeholder="Full Name" className="border px-2 py-1 rounded" />
            <input placeholder="Qualification" className="border px-2 py-1 rounded" />
            <input placeholder="Experience" className="border px-2 py-1 rounded" />
            <input placeholder="Mobile" className="border px-2 py-1 rounded" />
            <input placeholder="Address" className="border px-2 py-1 rounded" />
          </div>

          <div className="mt-3 flex items-center gap-2">
            <input type="checkbox" />
            <label>I agree to declaration</label>
          </div>

          <button className="mt-3 bg-blue-600 text-white px-4 py-1 rounded">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
};

export default StaffManagement;