import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageItems = () => {
    const [products, setProducts] = useState([]);
    const {_id,name,price,image,description,quantity,supplier}= products;
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(response => response.json())
        .then(data=>setProducts(data))
    }, [])


    const [user] = useAuthState(auth);
    
    const handleDeliver = (products) => {
        console.log(products);
        const {name,price,image,description,quantity,supplier}= products;
        fetch('http://localhost:5000/myitems', {

  method: 'POST',
  body: JSON.stringify({
      name: name,
    price: price,
    image: image,
    quantity: quantity,
    supplier: supplier,
      description: description,
      email:user.email
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
            .then((data) => {
                console.log(data)
                toast(data.success)
            });
  }
  
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/additem/${id}`, {
      method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
          const remaining = products.filter(product => product._id !== id);
          setProducts(remaining);
      })
    
  }




    return (
        <div className="container">
            <h1>Total Items: {products.length}</h1>
            <ToastContainer />
            <div className="row">
                    {
                    products.map(product => <div className="container col-12 col-md-6 col-lg-4 text-center" key={product._id}>
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.image} />
  <Card.Body>
                        <Card.Title>Name: { product.name}</Card.Title>
                        <Card.Title>Price :{ product.price}</Card.Title>
                        <Card.Title>Quantity: { product.quantity}</Card.Title>
                        <Card.Title>Supplier: { product.supplier}</Card.Title>
    <Card.Text>
      {product.description}
    </Card.Text>
    <Button className="mx-2" variant="primary" onClick={()=>handleDeliver(product)} >Delivery</Button>
    <Button variant="danger" onClick={()=>handleDelete(product._id)}>Delete</Button>
  </Card.Body>
</Card>
                </div> )
            }
            </div>
        
        </div>
    );
};

export default ManageItems;