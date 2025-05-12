import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <AppRoutes />
    <Footer />
  </Router>
);

export default App;
