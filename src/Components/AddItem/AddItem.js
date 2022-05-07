import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const AddItem = () => {

 const [user, loading, error] = useAuthState(auth);

    const handleAddItem = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
      const price = event.target.price.value;
      const image = event.target.image.value;
      const quantity = event.target.quantity.value;
      const supplier = event.target.supplier.value;
      const description = event.target.description.value;
        console.log(name, price,image);
        fetch('http://localhost:5000/additem', {
  method: 'POST',
  body: JSON.stringify({
      name: name,
    price: price,
    image: image,
    quantity: quantity,
    supplier: supplier,
      description: description
  }),
          headers: {
    "authorization": ` ${user.email} ${localStorage.getItem("accessToken")}`,
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
            .then((json) => {
                console.log(json);
                event.target.reset();
            });
    }
    return (
        <div className="container w-50 mx-auto mt-5">
             <h1 className="text-black text-center">Add New Item</h1>
            <Form onSubmit={handleAddItem} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Product name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" name="price" placeholder="price" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" name="image" placeholder="Enter image link" />
          </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Supplier Name</Form.Label>
    <Form.Control type="text" name="supplier" placeholder="Enter Supplier Name" />
          </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" name="quantity" placeholder="Enter quantity" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Short description</Form.Label>
    <Form.Control as="textarea" type="text" name="description" placeholder="Short description" rows={3} />
  </Form.Group>
          
  <Button variant="dark" type="submit">
    Add
          </Button>
        </Form>
        </div>
    );
};

export default AddItem;