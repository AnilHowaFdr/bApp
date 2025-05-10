import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import History from "./pages/History";
import Transfer from "./pages/Transfer";
import Request from "./pages/Request";
import Minutes from "./pages/Minutes";
import ClientMoney from "./pages/ClientMoney";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/request" element={<Request />} />
        <Route path="/minutes" element={<Minutes />} />
        <Route path="/clientMoney" element={<ClientMoney />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
