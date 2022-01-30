import React, { useEffect, useState } from 'react';
import {  useNavigate,useParams } from 'react-router-dom';
import { getEmpById, updateEmpData } from '../config/MyService';
import { Container, Row, Button, Form } from "react-bootstrap";

 function EditEmp(){
   const navigate = useNavigate();
   // get id from url:
   const { id } = useParams(); 
   console.log(id);

   //useState for storing data:  
   const [empData,setEmpData]=useState({})
  
  // fetch data for perticular id:
  useEffect(()=>{
    console.log("Edit page fetch Id:"+id);
    getEmpById(id).then( res=>{
       if(res){
           console.log(res.data);
           setEmpData(res.data);
       }
    }) 

 },[])  

 const handler= (event)=>{
    const { name,value } = event.target;
    console.log("name is" + name + "value is " + value);
    setEmpData({...empData, [name]:value});
    console.log(empData);
  }

// Post Edit Data:
 const postEditData = (event) => {
  event.preventDefault();
  updateEmpData(id,empData)
    .then((res) => {
      if(res){
          alert("Employee Details updated successfully.....");
          navigate("/");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

   return(
    <>
      <Container>
        <h2 class="text-center">Edit Employee Details: </h2>
        <Row className="justify-content-center">
          <Form className="col-md-4" onSubmit={postEditData}>
            <Form.Group className="mb-3" controlId="product-name">
              <Form.Label>Emp Name</Form.Label>
              <Form.Control
                name="ename"
                type="text"
                placeholder="Enter Emp Name"
                defaultValue={empData.ename}
                onChange={handler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="product-price">
              <Form.Label>Emp age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter age"
                defaultValue={empData.age}
                onChange={handler}
                name="age"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="product-qty">
              <Form.Label>Emp Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Emp Salary"
                defaultValue={empData.salary}
                onChange={handler}
                name="salary"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="product-qty">
              <Form.Label>Emp City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Emp City"
                defaultValue={empData.city}
                onChange={handler}
                name="city"
              />
            </Form.Group>

            {/* gender */}
            
            {/* gender */}
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  value="Male"
                  label="Male"
                  name="gender"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={handler}
                  checked={empData.gender === "Male"}
                  
                />
                <Form.Check
                  inline
                  value="Female"
                  label="Female"
                  name="gender"
                  type={type}
                  id={`inline-${type}-2`}
                  checked={empData.gender === "Female"}
                  onChange={handler}
                />
              </div>
            ))}
            {/* gender */}
            {/* gender */}
           
            <Button variant="primary" type="submit">
              Update Details
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  )
}
export default EditEmp