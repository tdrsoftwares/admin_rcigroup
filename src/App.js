import { Routes, Route } from "react-router-dom";
import Login from "./screen/Login";
import Navbar from "./screen/Navbar";
import AdmissionForm from "./screen/AdmissionForm";
import CourseManagement from "./screen/CourseManagement";
import BatchManagement from "./screen/BatchManagement";
import FeesManagement from "./screen/FeesManagement";
import StudentQuery from "./screen/StudentQuery";
import ExamManagement from "./screen/ExamManagement";
import StaffManagement from "./screen/StaffManagement";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admission-form" element={<AdmissionForm />} />
        <Route path="/course-management" element={<CourseManagement />} />
        <Route path="/batch-management" element={<BatchManagement />} />
        <Route path="/fee-management" element={<FeesManagement />} />
        <Route path="/student-query" element={<StudentQuery />} />
        <Route path="/exam-management" element={<ExamManagement />} />
        <Route path="/staff-management" element={<StaffManagement />} />
      </Routes>
    </>
  );
};

export default App;
