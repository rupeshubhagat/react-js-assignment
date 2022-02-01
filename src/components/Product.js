import React, { Component, useEffect, useState } from "react";
import { getEmployee, deleteEmp, getProducts, fetchProductByPageId } from "../config/MyService";
import { Container, Row, Col, Collapse, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

function Product() {
  const navigate = useNavigate();
  const [proData, setProData] = useState([]);
  // paginations
  const [items, setitems]=useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log(res.data);
        setProData(res.data);
        console.log(proData);
        // const totalPages = res.headers.get('x-total-count');
        // console.log(totalPages+"pages ");
        // 6 is my page limit count.
        console.log(res.headers['x-total-count']);
        const totalPageCount = res.headers['x-total-count'] / 6;
        setPageCount(Math.ceil(totalPageCount));
      })
      .catch((err) => console.log(err));
  }, []);
  
  // paginations:
  const handlePageClick = (data) => {
     console.log(data.selected);
     let currentPage = data.selected + 1;
     fetchProductByPageId(currentPage)
     .then((res) => {
      console.log(res.data);
      setProData(res.data);
      console.log(proData);
    })
    .catch((err) => console.log(err));
  };

  return (
    <>
      <Container className="mt-3">
        <h3>All Products</h3>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          previousLabel="< previous"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          pageCount={pageCount} 

          containerClassName={'pagination justify-content-center my-5'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}

          previousClassName={'page-item'}
          nextClassName={'page-item'}

          previousLinkClassName={'page-link'}
          nextLinkClassName={'page-link'}

          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}

          activeClassName={'active'}
          activeLinkClassName={'active'}
        />
        <Row className="card-wrap">
          {proData.map((product, index) => (
            <Col sm={12} md={4} lg={3} xl={4}>
              <Card key={product.id} className="mb-4">
                <div className="card-img-wrap">
                  <img src={product.image} alt="product-img" />
                </div>
                <Card.Body>
               
                <Card.Title>Id: {product.id}</Card.Title>
                  <Card.Text> Quantity: {product.quantity}</Card.Text>
                  <Card.Text> Price: {product.price}</Card.Text>
                  <Button
                    variant="warning"
                    className="me-2 mb-2"
                    // onClick={() => delProduct(product.id)}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
       
      </Container>
    </>
  );
}
export default Product;
