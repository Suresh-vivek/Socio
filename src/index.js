import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginB from "./Components/LoginB";
import App from "./App";
import SignUp from "./Components/SignUp";
import SignUpB from "./Components/SignUpB";
import NgoHome from "./Components/NgoHome";
import Donation from "./Components/Donation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/loginB" element={<LoginB />} />
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUpB />} />
        <Route path="/ngohome" element={<NgoHome />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
