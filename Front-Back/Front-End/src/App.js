import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./Component/Login";
import Register from "./Component/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
