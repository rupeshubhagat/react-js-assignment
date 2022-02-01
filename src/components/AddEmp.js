import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmpById, updateEmpData, addEmp } from "../config/MyService";
import { Container, Row, Button, Form, Alert } from "react-bootstrap";

function AddEmp() {
  // Navigations:
  const navigate = useNavigate();
  //  states
  const [empData, setEmpData] = useState({
    ename: "",
    salary: "",
    age: "",
    city: "",
    gender: "",
  });
  const [errMsg, setErrMsg] = useState();
  const [validstate, setValidState] = useState(false);

  const handler = (event) => {
    const { name, value } = event.target;
    setEmpData({ ...empData, [name]: value });
  };

  const validateErrors = () => {
    if (
      empData.ename == "" ||
      empData.age == "" ||
      empData.salary == "" ||
      empData.city == ""
    ) {
      setErrMsg("Please Fill the blank Field");
      return false;
    }

    // Name pattern error
    let nameRegx = /^[a-zA-Z ]+$/;
    if (!nameRegx.test(empData.ename) || !nameRegx.test(empData.city)) {
      setErrMsg("Only Alphabet allowed in Name & city field");
      return false;
    }
    return true;
  };

  const postEmp = (event) => {
    event.preventDefault();
    if (validateErrors()) {
      addEmp(empData)
        .then((res) => {
          if (res) {
            alert("Employee Details Added Successfully..");
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <Container className="mt-2">
        <h2 class="text-center">Add new Employee </h2>

        <Row className="justify-content-center">
          <Form className="col-md-4" onSubmit={postEmp}>
            {errMsg != "" && <p className="err-msg">{errMsg}</p>}
            <Form.Label>Emp Name</Form.Label>
            <Form.Group className="mb-3" controlId="product-name">
              <Form.Control
                name="ename"
                type="text"
                placeholder="Enter Emp Name"
                onChange={handler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="product-price">
              <Form.Label>Emp age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter age"
                onChange={handler}
                name="age"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="product-qty">
              <Form.Label>Emp Salary</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Emp Salary"
                onChange={handler}
                name="salary"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="product-qty">
              <Form.Label>Emp City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Emp City"
                onChange={handler}
                name="city"
              />
            </Form.Group>

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
                />
                <Form.Check
                  inline
                  value="Female"
                  label="Female"
                  name="gender"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={handler}
                />
              </div>
            ))}
            {/* gender */}

            <Button variant="primary" type="submit">
              Add New Emp
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}
export default AddEmp;
