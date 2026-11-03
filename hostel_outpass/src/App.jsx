import Header from "./components/Header";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/super-admin/Dashboard";
import StudentDashboard from "./pages/student/StudentDashboard";  


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
         <Route path="/super-admin" element={<Dashboard />} />
         <Route path="/student" element={<StudentDashboard />} />
         <Route
          path="/caretaker"
          element={<CaretakerDashboard />}
        />
      </Routes>
    </>
  );
}

export default App;