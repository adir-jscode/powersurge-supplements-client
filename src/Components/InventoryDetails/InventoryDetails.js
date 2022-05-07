import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts/UseProducts';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState({});

    const productQuantity = product.quantity;
    console.log(productQuantity);
    
    // const [quantity, setQuantity] = useState();
    // console.log(quantity);
    
    
    useEffect(() => {
        fetch(`http://localhost:5000/products/${inventoryId}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [])
    
    const handleDelivery = () => {
        console.log("clicked");
        fetch(`http://localhost:5000/products/${inventoryId}`, {
  method: 'PUT',
  body: JSON.stringify({
      quantity: product.quantity - 1 
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
    }

    const handleStock = (event) => {
        event.preventDefault();
        const addStock = event.target.quantity.value;
        console.log(addStock);
        fetch(`http://localhost:5000/products/${inventoryId}`, {
  method: 'PUT',
  body: JSON.stringify({
      quantity: product.quantity + parseInt(addStock)  
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
    }

return (
        <div className="container w-50 mx-auto mt-5">
            <h1 className="w-100 text-center">Product Id : {inventoryId}</h1>
            <div className="container col-12 col-md-6 col-lg-4 text-center">
                          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.image} />
  <Card.Body>
                        <Card.Title>Name : { product.name}</Card.Title>
                        <Card.Title>Price : { product.price}</Card.Title>
    <Card.Title>Quantity : {product.quantity}</Card.Title> 
    <Card.Title>Supplier : { product.supplier}</Card.Title>
    <Card.Text>
      {product.description}
    </Card.Text>
    <Button variant="dark" onClick={handleDelivery}>Delivered</Button>
  </Card.Body>
                </Card>
                
                <Form onSubmit={handleStock} >
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" name="quantity" placeholder="Enter quantity" />
          </Form.Group>

          
  <Button variant="dark" type="submit">
    Stock 
          </Button>
        </Form>
            </div>
     
        </div>
    );
};
    
    

export default InventoryDetails;