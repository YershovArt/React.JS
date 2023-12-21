import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import About from "./components/About";
import Error from "./components/Error";
import Main from "./components/Main";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Note from "./components/Note";
import './App.css';
function App() {
  return (
    <div className="app__container">
      <Router>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/note/" element={<Note />} />
          <Route path="/note/:noteURL" element={<Note />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
