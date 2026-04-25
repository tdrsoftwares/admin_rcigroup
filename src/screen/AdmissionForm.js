import React, { useState } from "react";
import QRCode from "react-qr-code";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const AdmissionForm = () => {
  const generateAppId = () => "APP" + Date.now();

  const [formData, setFormData] = useState({
    applicationNo: generateAppId(),
    admissionDate: new Date().toISOString().split("T")[0],
    studentName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    dob: "",
    address: "",
    mobile: "",
    whatsapp: "",
    religion: "",
    qualification: "",
    aadhaar: "",
    courseCategory: "",
    courseDuration: "",
    courseName: "",
    declaration: false,
  });

  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const previewForm = () => {
    alert("Preview clicked");
  };

  const sendOtp = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(newOtp);
    alert("OTP: " + newOtp);
  };

  const submitWithOtp = () => {
    if (otp == generatedOtp) {
      alert("Form Submitted ✅");
    } else {
      alert("Wrong OTP ❌");
    }
  };

  const printForm = () => {
    const input = document.getElementById("form-print");
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 10, 10);
      pdf.save("admission.pdf");
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div id="form-print" className="max-w-7xl mx-auto bg-white p-4 rounded shadow">

        <h2 className="text-xl font-bold text-center mb-4">
          Admission Form
        </h2>

        <div className="bg-blue-200 p-4 rounded-lg">

          {/* ROW 1 */}
          <div className="grid grid-cols-8 gap-3 mb-3">

            <div>
              <label className="text-xs font-semibold">App No</label>
              <input value={formData.applicationNo} readOnly
                className="w-full px-2 py-1 border rounded text-sm bg-gray-100" />
            </div>

            <div>
              <label className="text-xs font-semibold">Date</label>
              <input value={formData.admissionDate} readOnly
                className="w-full px-2 py-1 border rounded text-sm bg-gray-100" />
            </div>

            <div>
              <label className="text-xs font-semibold">Student Name *</label>
              <input name="studentName" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold">Father Name *</label>
              <input name="fatherName" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold">Mother Name *</label>
              <input name="motherName" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold">Gender</label>
              <select name="gender" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold">DOB</label>
              <input type="date" name="dob" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold">Mobile *</label>
              <input name="mobile" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-8 gap-3 mb-3">

            <div>
              <label className="text-xs font-semibold">WhatsApp</label>
              <input name="whatsapp" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div className="col-span-2">
              <label className="text-xs font-semibold">Address *</label>
              <input name="address" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold">Religion</label>
              <input name="religion" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold">Qualification</label>
              <input name="qualification" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold">Aadhaar *</label>
              <input name="aadhaar" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold">Category</label>
              <select name="courseCategory" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm">
                <option>Select</option>
                <option>Package</option>
                <option>Monthly</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold">Duration</label>
              <input name="courseDuration" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-8 gap-3 mb-3">

            <div>
              <label className="text-xs font-semibold">Course</label>
              <input name="courseName" onChange={handleChange}
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold">Photo</label>
              <input type="file"
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold">Documents</label>
              <input type="file" multiple
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold">Student Sign</label>
              <input type="file"
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold">Guardian Sign</label>
              <input type="file"
                className="w-full px-2 py-1 border rounded text-sm" />
            </div>

            <div className="col-span-2 flex items-center mt-5">
              <input type="checkbox" name="declaration" onChange={handleChange} />
              <label className="ml-2 text-sm">Declaration *</label>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 mt-4">

            <button onClick={previewForm}
              className="px-4 py-2 bg-yellow-500 text-white rounded">
              Preview
            </button>

            <button onClick={printForm}
              className="px-4 py-2 bg-green-600 text-white rounded">
              Print
            </button>

            <button onClick={sendOtp}
              className="px-4 py-2 bg-gray-800 text-white rounded">
              Send OTP
            </button>

            <button onClick={submitWithOtp}
              className="px-4 py-2 bg-blue-600 text-white rounded">
              Submit
            </button>

          </div>

          {/* OTP INPUT */}
          <div className="mt-4 flex gap-2">
            <input
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-2 py-1 border rounded text-sm"
            />
          </div>

        </div>

        {/* QR */}
        <div className="flex justify-center mt-6">
          <QRCode value={formData.applicationNo} />
        </div>

      </div>
    </div>
  );
};

export default AdmissionForm;