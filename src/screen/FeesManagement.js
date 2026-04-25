import React, { useState } from "react";
import jsPDF from "jspdf";

const FeesManagement = () => {
  const [students, setStudents] = useState([
    { name: "Rahul", course: "React", fee: 10000, paid: false },
  ]);

  const [courseFee, setCourseFee] = useState({
    type: "",
    amount: "",
  });

  const [discount, setDiscount] = useState("");
  const [extraFee, setExtraFee] = useState("");

  // Apply Discount
  const applyDiscount = (fee) => {
    return fee - (fee * discount) / 100;
  };

  // Payment
  const collectPayment = (index) => {
    const updated = [...students];
    updated[index].paid = true;
    setStudents(updated);

    alert("Payment Collected ✅");
  };

  // Bill Print
  const printBill = (student) => {
    const pdf = new jsPDF();

    pdf.text("Fee Receipt", 80, 10);
    pdf.text(`Name: ${student.name}`, 10, 30);
    pdf.text(`Course: ${student.course}`, 10, 40);
    pdf.text(`Amount: ₹${student.fee}`, 10, 50);

    pdf.save("bill.pdf");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4">Fees Management</h2>

        {/* COURSE FEE DESIGN */}
        <div className="grid grid-cols-4 gap-3 mb-4">

          <div>
            <label className="text-sm">Fee Type</label>
            <select
              onChange={(e) =>
                setCourseFee({ ...courseFee, type: e.target.value })
              }
              className="w-full px-2 py-1 border rounded"
            >
              <option>Select</option>
              <option>Package</option>
              <option>Monthly</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Fee Amount</label>
            <input
              type="number"
              onChange={(e) =>
                setCourseFee({ ...courseFee, amount: e.target.value })
              }
              className="w-full px-2 py-1 border rounded"
            />
          </div>

          <div>
            <label className="text-sm">Discount (%)</label>
            <input
              type="number"
              onChange={(e) => setDiscount(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </div>

          <div>
            <label className="text-sm">Extra Class Fee</label>
            <input
              type="number"
              onChange={(e) => setExtraFee(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </div>

        </div>

        {/* STUDENT TABLE */}
        <table className="w-full border mt-4">
          <thead className="bg-blue-200">
            <tr>
              <th className="border p-2">Student</th>
              <th className="border p-2">Course</th>
              <th className="border p-2">Fee</th>
              <th className="border p-2">Discounted</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s, i) => {
              const finalFee =
                applyDiscount(s.fee) + Number(extraFee || 0);

              return (
                <tr key={i} className="text-center">

                  <td className="border p-2">{s.name}</td>
                  <td className="border p-2">{s.course}</td>
                  <td className="border p-2">₹{s.fee}</td>
                  <td className="border p-2 text-green-600">
                    ₹{finalFee}
                  </td>

                  <td className="border p-2">
                    {s.paid ? "Paid ✅" : "Pending ❌"}
                  </td>

                  <td className="border p-2 flex gap-2 justify-center">

                    {!s.paid && (
                      <button
                        onClick={() => collectPayment(i)}
                        className="bg-green-600 text-white px-2 py-1 rounded"
                      >
                        Pay
                      </button>
                    )}

                    <button
                      onClick={() => printBill(s)}
                      className="bg-blue-600 text-white px-2 py-1 rounded"
                    >
                      Print
                    </button>

                  </td>

                </tr>
              );
            })}
          </tbody>

        </table>

        {/* ALERTS */}
        <div className="mt-6">

          <h3 className="font-semibold mb-2">Alerts</h3>

          <div className="bg-yellow-100 p-3 rounded">
            ⚠ Students with pending fees will receive alerts (SMS / WhatsApp)
          </div>

        </div>

      </div>
    </div>
  );
};

export default FeesManagement;