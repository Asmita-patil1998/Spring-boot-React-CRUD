import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  let navigate = useNavigate();
  let url = "";
  const [imageSelcted,setImageSelected] = useState("");
  
  const [employee, setEmployee] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    emailId : "",
   img_url: "",
  });
  const { firstName, lastName, emailId } = employee;
  const onInputChange = (e) => {
  
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  // const upload = () =>{
  //   const formData = new FormData();
  //   formData.append("file",imageSelcted)
  //   formData.append("upload_preset","uik775wo")
  //   axios.post("https://api.cloudinary.com/v1_1/dihbjrwtf/image/upload", formData)
  //   .then((response) => {

  //   });
    
  // } 
  const onSubmit = async (e) => {
    e.preventDefault();
   
    const formData = new FormData();
    formData.append("file",imageSelcted)
    formData.append("upload_preset","uik775wo")
    await axios.post("https://api.cloudinary.com/v1_1/dihbjrwtf/image/upload", formData)
    .then((response) => {

url = response.data.secure_url;
console.log("url"+url)
setEmployee({...employee, img_url:url});
    });
    console.log( employee); 

    await axios.post("http://localhost:9002/api/v1/employees", employee)
    .then(resp=> {console.log(resp); axios.put(`http://localhost:9002/api/v1/url?id=${resp.data.id}&url=${url}`)});
    navigate("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow bg-dark p-5 mt-5 ">
        <h2 className="text-center shadow text-light mb-4">Add New Employee</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
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
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Email ID"
              name="emailId"
              value={emailId}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control form-control-lg mb-3"
              name="img_url"
             
              onChange={(e) => setImageSelected(e.target.files[0])}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
