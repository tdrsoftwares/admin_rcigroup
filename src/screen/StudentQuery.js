import React, { useState } from "react";

const StudentQuery = () => {
  // Query Form
  const [query, setQuery] = useState({
    name: "",
    mobile: "",
    course: "",
  });

  // Dummy admitted students
  const [students, setStudents] = useState([
    {
      appNo: "APP123",
      name: "Rahul",
      mobile: "9876543210",
      dob: "2000-04-18",
      course: "React",
    },
  ]);

  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  // Handle Query Input
  const handleQueryChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  // Submit Query
  const submitQuery = () => {
    alert("Query Submitted ✅");
    setQuery({ name: "", mobile: "", course: "" });
  };

  // Search Student
  const searchStudent = () => {
    const found = students.find(
      (s) => s.appNo === search || s.mobile === search
    );

    if (found) {
      setResult(found);
    } else {
      alert("Student not found ❌");
      setResult(null);
    }
  };

  // Admission SMS
  const sendAdmissionSMS = (student) => {
    alert(`SMS Sent to ${student.mobile} 📩\nAdmission Completed`);
  };

  // Birthday SMS
  const sendBirthdaySMS = (student) => {
    alert(`🎉 Happy Birthday ${student.name}!\nSMS Sent to ${student.mobile}`);
  };

  // Check today's birthdays
  const today = new Date().toISOString().slice(5, 10);
  const birthdayStudents = students.filter(
    (s) => s.dob.slice(5, 10) === today
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4">Student Query & Communication</h2>

        {/* ADMISSION QUERY */}
        <div className="mb-6 border p-4 rounded bg-gray-50">

          <h3 className="font-semibold mb-2">Admission Query</h3>

          <div className="grid grid-cols-3 gap-3">

            <input
              name="name"
              value={query.name}
              onChange={handleQueryChange}
              placeholder="Student Name"
              className="border px-2 py-1 rounded"
            />

            <input
              name="mobile"
              value={query.mobile}
              onChange={handleQueryChange}
              placeholder="Mobile Number"
              className="border px-2 py-1 rounded"
            />

            <input
              name="course"
              value={query.course}
              onChange={handleQueryChange}
              placeholder="Interested Course"
              className="border px-2 py-1 rounded"
            />

          </div>

          <button
            onClick={submitQuery}
            className="mt-3 bg-blue-600 text-white px-4 py-1 rounded"
          >
            Submit Query
          </button>

        </div>

        {/* SEARCH STUDENT */}
        <div className="mb-6 border p-4 rounded bg-gray-50">

          <h3 className="font-semibold mb-2">
            Search Student (App No / Mobile)
          </h3>

          <div className="flex gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter App No or Mobile"
              className="w-full border px-2 py-1 rounded"
            />
            <button
              onClick={searchStudent}
              className="bg-green-600 text-white px-4 rounded"
            >
              Search
            </button>
          </div>

          {/* RESULT */}
          {result && (
            <div className="mt-4 p-3 border rounded bg-white">
              <p><b>Name:</b> {result.name}</p>
              <p><b>Course:</b> {result.course}</p>
              <p><b>Mobile:</b> {result.mobile}</p>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => sendAdmissionSMS(result)}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Send Admission SMS
                </button>

                <button
                  onClick={() => sendBirthdaySMS(result)}
                  className="bg-pink-600 text-white px-3 py-1 rounded"
                >
                  Birthday Wish
                </button>
              </div>
            </div>
          )}

        </div>

        {/* BIRTHDAY ALERT */}
        <div className="border p-4 rounded bg-yellow-100">

          <h3 className="font-semibold mb-2">🎂 Today's Birthdays</h3>

          {birthdayStudents.length === 0 ? (
            <p>No birthdays today</p>
          ) : (
            birthdayStudents.map((s, i) => (
              <div key={i} className="flex justify-between mb-2">

                <span>{s.name}</span>

                <button
                  onClick={() => sendBirthdaySMS(s)}
                  className="bg-pink-600 text-white px-2 py-1 rounded"
                >
                  Send Wish
                </button>

              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
};

export default StudentQuery;