import Header from "./components/Header";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import SuperAdminSidebar from "./components/organisms/SuperAdminSidebar";
import StudentSidebar from "./components/organisms/StudentSidebar"; 
import CaretakerSidebar from "./components/organisms/CaretakerSidebar";
import SecuritySidebar from "./components/organisms/SecuritySidebar";
import HostelAdminSidebar from "./components/organisms/HostelAdminSidebar";


function Home() {
  return (
    <div className="px-10 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 text-center">
        Welcome to Hostel Outpass ERP
      </h1>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/super-admin" element={<SuperAdminSidebar />} />
         <Route path="/student" element={<StudentSidebar />} />
         <Route path="/caretaker" element={<CaretakerSidebar />} />
         <Route path="/security" element={<SecuritySidebar />} />
         <Route path="/hostel-admin" element={<HostelAdminSidebar />} />
      </Routes>
    </>
  );
}

export default App;