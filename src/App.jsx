// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import { RideProvider } from "./context/RideContext";

const App = () => (
  <RideProvider>
    <Router>
      <AppRoutes />
      <Footer />
    </Router>
  </RideProvider>
);

export default App;
