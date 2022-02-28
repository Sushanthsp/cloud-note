import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import NoteState from "./context/notes/noteState";
import { Alert } from "./components/alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AlertState from "./context/notes/alertState";
import { ThemeState } from "./context/notes/ThemeContext";

function App() {
  return (
    <>
      <NoteState>
        <AlertState>
          <ThemeState>
            <Router>
              <Navbar />
              <Alert message={null} />
              <div className={`my-2 text-dark bg-light`}>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/blog" element={<About />} />
                  <Route exact path="/signup" element={<SignUp />} />
                  <Route exact path="/login" element={<Login />} />
                </Routes>
              </div>  
            </Router>
          </ThemeState>
        </AlertState>
      </NoteState>
    </>
  );
}

export default App;
