import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import History from "./pages/History";
import Transfer from "./pages/Transfer";
import Request from "./pages/Request";
import Minutes from "./pages/Minutes";
import ClientMoney from "./pages/ClientMoney";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/request" element={<Request />} />
          <Route path="/minutes" element={<Minutes />} />
          <Route path="/clientMoney" element={<ClientMoney />} />
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
