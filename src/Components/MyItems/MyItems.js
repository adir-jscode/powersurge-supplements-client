import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Spinner from '../Spinner/Spinner';

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    const [user] = useAuthState(auth);

  useEffect(() => {
      setIsLoading(true);
        fetch('https://still-sierra-81975.herokuapp.com/selecteditems', {
             headers: {
    "authorization": ` ${user.email} ${localStorage.getItem("accessToken")}`,
    'Content-type': 'application/json; charset=UTF-8',
  },
        })
            .then(response => response.json())
          .then(data => {
            setItems(data)
            setIsLoading(false)
          })
    }, [user.email])

    const handleDelete = (id) => {
      console.log(id);
      const confirm = window.confirm('Are you sure?');
      if (confirm) {
        fetch(`https://still-sierra-81975.herokuapp.com/myitems/${id}`, {
      method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
          const remaining = items.filter(items => items._id !== id);
          setItems(remaining);
      })
    
  }
      }
    
    return (
        <div className="container  mx-auto mt-5">
            <h1 className=" text-center text-dark fw-bold"> Confirmed items: {items.length}</h1>
              <div className="row">
                    { isLoading ? <Spinner></Spinner> : 
                    items.map(items => <div className="container col-12 col-md-6 col-lg-4 text-center" key={items._id}>
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={items.image} />
  <Card.Body>
                        <Card.Title>{ items.name}</Card.Title>
                        <Card.Title>${ items.price}</Card.Title>
                        
    {/* <Card.Text>
      {items.description}
    </Card.Text> */}
    <Button variant="danger" onClick={()=>handleDelete(items._id)}>Delete</Button>
  </Card.Body>
</Card>
                </div> )
            }
            </div>
        </div>
    );
};

export default MyItems;