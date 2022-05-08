import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts/UseProducts';

const Inventory = () => {
    const [products, setProducts] = UseProducts([]);
    console.log(products);
    const navigate = useNavigate();

    const navigateToInventories = () => {
        navigate("/manageitems");
    }
    // const { description, image, name, price, quantity, supplier, _id } = products;
    const handleStock = (id) => {
        console.log(id);
        navigate(`/inventory/${id}`);
    }
    return (
        <div className="container mx-auto mt-5">
            <h1 className="text-center text-black">Collection Of <span className="text-danger fw-bold">Products</span> </h1>
            <div className="row mt-5">
                {
                    products.map(product =><div className="container  gy-5 col-md--12 col-md-6 col-lg-4  text-center">
            <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={product.image} alt=""/>
  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                                <p className="fw-bold">${product.price}</p>
                                <h5 className="card-title">Quantity : {product.quantity}</h5>
                                <h5 className="card-title">Supplier : {product.supplier}</h5>
    <p className="card-text">{product.description}</p>
    <button onClick={()=>handleStock(product._id)} className="btn btn-dark">Update</button>
  </div>
</div>
        </div> )
                }
                 <button onClick={navigateToInventories} className="btn btn-secondary text-center w-25 mx-auto mt-5">Manage Inventory</button>
            </div>
           
        </div>
    );
};

export default Inventory;