import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import PaymentGatway from "./Pages/PaymentGatway";
import ZarinCard from "./Pages/ZarinCard";
import SplitPayment from "./Pages/SplitPayment";
import ZarinLink from "./Pages/ZarinLink";
import ZarinPlus from "./Pages/ZarinPlus";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header from "./Components/Header/Header";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/payment-gateway" element={<PaymentGatway />} />
          <Route path="/zarincard" element={<ZarinCard />} />
          <Route path="/split-payment" element={<SplitPayment />} />
          <Route path="/zarinlink" element={<ZarinLink />} />
          <Route path="/zarinplus" element={<ZarinPlus />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
