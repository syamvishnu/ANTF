import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/privateRoute";
import Recordpage from "./pages/Recordpage";
import Entrypage from "./pages/Entrypage";
import Bulkupload from "./pages/Bulkupload";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/records" element={<Recordpage />} />
          <Route path="/entry" element={<Entrypage />} />
          <Route path="/bulk" element={<Bulkupload />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
