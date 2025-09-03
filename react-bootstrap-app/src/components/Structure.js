import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import MyNavbar from "../components/navbar";

function MyStructure() {
  return (
    <Router>
      <div className="min-vh-100 bg-dark text-white">
        <MyNavbar />
        <main className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/league/:leagueName" element={<LeaguePage />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default MyStructure;
