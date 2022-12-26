import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Questions from "./pages/Questions";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProfilePages from "./pages/ProfilePages";
import { AuthContext } from "./context/auth";

const App: React.FC = () => {
  return (
    <AuthContext>
      <div className="h-full">
        <BrowserRouter>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Questions />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<ProfilePages />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthContext>
  );
};

export default App;
