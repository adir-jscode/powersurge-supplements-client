import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts/UseProducts';

const Inventory = () => {
    const [products, setProducts] = UseProducts([]);
    console.log(products);
    const navigate = useNavigate();
    // const { description, image, name, price, quantity, supplier, _id } = products;
    const handleStock = (id) => {
        console.log(id);
        navigate(`/inventory/${id}`);
    }
    return (
        <div className="container">
            <h1 className="text-center text-black">Number of products: {products.length}</h1>
            <div className="row">
                {
                    products.map(product =><div className="container col-12 col-md-6 col-lg-4 text-center">
            <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={product.image} alt=""/>
  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="fw-bold">{product.price}</p>
    <p className="card-text">{product.description}</p>
    <button onClick={()=>handleStock(product._id)} className="btn btn-primary">Update</button>
  </div>
</div>
        </div> )
                }
            </div>
        </div>
    );
};

export default Inventory;