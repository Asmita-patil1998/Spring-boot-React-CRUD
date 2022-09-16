import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>

const EditEmployee = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    emailId : "",
  });

  const [ inputValue, setInputValue ] = useState("Value from onchanges");
  const handleCancel = () => {
    setInputValue("");
};
  const {firstName, lastName, emailId } = employee;
  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:9002/api/v1/employees/${id}`,
      employee
    );
    navigate("/");
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(
      `http://localhost:9002/api/v1/employees/${id}`
    );
    setEmployee(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow bg-dark p-5 mt-5 ">
        <h2 className="text-center mb-4 text-light">Edit Employee Details</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
             First Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter first Name"
              name="firstName"
              value={firstName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
             Last Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailId" className="form-label">
             Email ID
            </label>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Email ID"
              name="emailId"
              value={emailId}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Save</button> &nbsp;
          <button type="submit" className="btn btn-danger btn-block" onClick={handleCancel}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
