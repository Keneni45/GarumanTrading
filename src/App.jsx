import Footer from "./Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoute from "./Components/AnimatedRoute";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <AnimatedRoute />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
