import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/super-admin/Dashboard";

function Home() {
  return (
    <div className="px-10 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600">
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
      </Routes>

      <Footer />
    </>
  );
}

export default App;