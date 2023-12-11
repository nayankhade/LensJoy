import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Table } from 'react-bootstrap';

export function Orders() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    size: '',
    color: '',
    forWhome: '',
  });

  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:8900/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      } else {
        console.error('Error fetching orders');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = selectedOrderId
        ? `http://localhost:8900/orders/${selectedOrderId}`
        : 'http://localhost:8900/orders';

      const method = selectedOrderId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        fetchOrders();
        // Reset form data after submission
        setFormData({
          name: '',
          phone: '',
          address: '',
          size: '',
          color: '',
          forWhome: '',
        });
        // Reset selectedOrderId after submission
        setSelectedOrderId(null);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8900/orders/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Order deleted successfully');
        fetchOrders();
      } else {
        console.error('Error deleting order');
      }
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleEdit = (id) => {
    const selectedOrder = orders.find((order) => order._id === id);
    if (selectedOrder) {
      setFormData({
        name: selectedOrder.name,
        phone: selectedOrder.phone,
        address: selectedOrder.address,
        size: selectedOrder.size,
        color: selectedOrder.color,
        forWhome: selectedOrder.forWhome,
      });
      setSelectedOrderId(id);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit} style={{marginLeft : '70px', marginRight : '70px', boxShadow : '0 5px 18px rgba(34, 34, 34, 0.2)', padding: '10px'}}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSize">
          <Form.Label>Size of frame</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter size"
            name="size"
            value={formData.size}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formColor">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Label>For whom</Form.Label>
        <Form.Control
          as="select"
          name="forWhome"
          value={formData.forWhome}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="kids">Kids</option>
          <option value="womens">Womens</option>
          <option value="mens">Mens</option>
        </Form.Control>

        <Button variant="primary" type="submit" style={{marginTop : '11px'}}>
          Submit
        </Button>
      </Form>

      <div className="mt-4" style={{marginLeft : '70px', marginRight : '70px', boxShadow : '0 5px 18px rgba(34, 34, 34, 0.2)', padding: '10px', border : '0.5px solid rgb(196, 193, 193)58, 154, 154)', marginBottom : '20px'}}>
        <h2>Orders</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Size</th>
              <th>Color</th>
              <th>For Whom</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.size}</td>
                <td>{order.color}</td>
                <td>{order.forWhome}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(order._id)} >
                    Delete
                  </Button>
                  <Button variant="warning" onClick={() => handleEdit(order._id)} style={{marginLeft : '5px'}}>
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
