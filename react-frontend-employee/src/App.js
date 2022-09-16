import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";

import AddEmployee from "./components/employees/AddEmployee";
import ViewEmployee from "./components/employees/ViewEmployee";
import EditEmployee from "./components/employees/EditEmployee";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
       
          <Route path="/add/employee" element={<AddEmployee />} />
         
          <Route path="/view/employee/:id" element={<ViewEmployee />} />
          <Route path="/edit/employee/:id" element={<EditEmployee />} />
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
