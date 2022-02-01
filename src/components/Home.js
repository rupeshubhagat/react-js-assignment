import React, { Component, useEffect, useState } from "react";
import { getEmployee,deleteEmp } from "../config/MyService";
import { Container, Row, Col, Collapse, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home(){
  
  const navigate = useNavigate();
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    getEmployee()
      .then((res) => {
        console.log(res.data);
        setEmpData(res.data);
        console.log(empData);
      })
      .catch((err) => console.log(err));
  }, []);


  // update
  const updateEmp = (id) => {
    navigate(`/edit-emp/${id}`);
  };

  // Delete:
  const delEmp = (id) => {
    if (window.confirm("Do you want to delete ?")) {
      deleteEmp(id)
        .then((res) => {
          alert("Emp Data Deleted Successfully.");
          getEmployee().then((res) => {
            setEmpData(res.data);
          });
        })
        .catch((err) => console.log(err));
    }
  };

   return(
    <>
       <Container className="mt-3">
        <h3> Employee Details</h3>
        <Row className="card-wrap">
          {empData.map((emp, index) => (
            <Col sm={12} md={4} lg={3} xl={4} >
              <Card key={emp.id} className="mb-4">
                <Card.Body>
                  <Card.Title>Name: {emp.ename.toUpperCase()}</Card.Title>
                  <Card.Text> Age: {emp.age}</Card.Text>
                  <Card.Text> City: {emp.city}</Card.Text>
                  <Button
                    variant="danger"
                    className="me-2 mb-2"
                    onClick={() => delEmp(emp.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="info"
                    className="me-2 mb-2"
                    onClick={() => updateEmp(emp.id)}
                  >
                    Update
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
export default Home