import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Image } from  "cloudinary-react";



const ViewEmployee = () => {
  const [employee, setEmployee] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    emailId : "",
    img_url: "",
  });
  const { id } = useParams();
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
    <div className="container py-4">
    <div className="container  py-4">
      <h4 className="display-6 text-success ">Employee &nbsp;{employee.firstName} &nbsp;</h4>
      &nbsp;
      <Image style={{width:200}} cloudName="dihbjrwtf" publicId={employee.img_url}/>
      <hr />
      <ul className="list-group bg-dark  w-80">
      <li className="list-group-item text-light bg-dark">Employee ID: {employee.id}</li>
        <li className="list-group-item text-light bg-dark">First Name: {employee.firstName}</li>
        <li className="list-group-item text-light bg-dark">
          Last Name: {employee.lastName}
        </li>
        <li className="list-group-item bg-dark text-light">Email ID: {employee.emailId}</li>
      </ul>
      <Link className="btn btn-success mt-3" to="/">
        Back
      </Link>
    </div>
    </div>
  );
};

export default ViewEmployee;
