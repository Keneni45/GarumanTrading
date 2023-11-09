import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoute from "./Components/AnimatedRoute";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <AnimatedRoute />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
