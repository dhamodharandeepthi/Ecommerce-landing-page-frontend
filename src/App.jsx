import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, selectedCategory]);

  const fetchProducts = async () => {
    const query = `?search=${searchTerm}&category=${selectedCategory}`;
    const res = await axios.get(`https://ecommerce-landing-page-backend.onrender.com/api/products${query}`);
    setProducts(res.data);
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleCategoryFilter = (e) => setSelectedCategory(e.target.value);
  const handleModalClose = () => setModalData(null);
  const handleProductClick = (product) => setModalData(product);

  return (
    <Container>
      <Row className="my-4 text-center">
        <Col>
          <h1 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>ECommerce Landing Page</h1>
          <Form.Control
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={handleSearch}
            className="mb-3"
            style={{ padding: '10px', fontSize: '1rem', borderRadius: '8px' }}
          />
          <Form.Select
            onChange={handleCategoryFilter}
            value={selectedCategory}
            className="mb-4"
            style={{ padding: '10px', fontSize: '1rem', borderRadius: '8px' }}>
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home appliances">Home Appliances</option>
          </Form.Select>
        </Col>
      </Row>

      <Row>
        {products.map((product) => (
          <Col md={4} sm={6} key={product._id} className="d-flex justify-content-center">
            <Card
              onClick={() => handleProductClick(product)}
              style={{
                cursor: 'pointer',
                width: '18rem',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                borderRadius: '12px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              className="mb-4 hover-effect"
            >
              <Card.Img variant="top" src={product.image} style={{ borderRadius: '12px 12px 0 0' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{product.title}</Card.Title>
                <Card.Text style={{ color: '#555' }}>${product.price.toFixed(2)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {modalData && (
        <Modal show={true} onHide={handleModalClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modalData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={modalData.image} alt={modalData.title} className="img-fluid mb-4" style={{ maxHeight: '200px', objectFit: 'contain' }} />
            <p style={{ fontSize: '1.1rem', color: '#333' }}>{modalData.description}</p>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Price: ${modalData.price.toFixed(2)}</p>
            <p>Available Quantity: {modalData.quantity}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose} style={{ padding: '10px 20px', borderRadius: '20px' }}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default App;
