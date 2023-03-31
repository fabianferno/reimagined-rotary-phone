import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

import "./styles/style.scss";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/dashboard"
            element={<Dashboard />}
          />
        </Routes>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
