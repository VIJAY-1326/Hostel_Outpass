import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50">
        <h1 className="text-center text-3xl font-bold text-blue-600 pt-10">
          Welcome to Hostel Outpass ERP
        </h1>
      </div>
      <Footer />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;