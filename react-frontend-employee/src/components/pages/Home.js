import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    loadEmployees();
  }, []);
  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:9002/api/v1/employees");
    setEmployees(result.data.reverse());
  };
  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:9002/api/v1/employees/${id}`);
    loadEmployees();
  };

  return (
    
    <div className="container">
      <div className="py-4">
        <h1>Employees</h1>
        <table className="table table-dark border shadow">
          <thead className="table">
            <tr>
              <th scope="col">Emp ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Id</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <Link
                    class="btn btn-home btn btn-primary me-2"
                    to={`/view/employee/${employee.id}`}
                  >
                    View
                  </Link>
                  <Link
                    class="btn btn-home btn btn-success me-2"
                    to={`/edit/employee/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-home btn btn-danger me-2"
                   
                    to="/"
                    onClick={() => deleteEmployee(employee.id)}
                  > <i class="fa fa-trash" aria-hidden="true"></i>
                    Delete
                  </Link>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>
    </div>
  );
};

export default Home;
