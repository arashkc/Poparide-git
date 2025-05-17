import { UserProvider } from "./context/UserContext";
import { RideProvider } from "./context/RideContext";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

const App = () => (
  <UserProvider>
    <RideProvider>
      <Router>
        <AppRoutes />
        <Footer />
      </Router>
    </RideProvider>
  </UserProvider>
);

export default App;
