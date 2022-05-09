import React,{useEffect,useState} from "react";

import { useSelector, useDispatch } from 'react-redux';

import { getProducts } from '../../service/adminService'

import './products.scss'

import {addProductToCarT} from '../../redux/action/action'



function Products() {
    const { categoryData } = useSelector((state) => state.categoryData);

    const [products, setProducts] = useState([])
    
    const dispacth = useDispatch();

    const getProductsFromAPI = async() => {
        const products = await getProducts();

        setProducts(products)

    }
    
    useEffect(() => {
        getProductsFromAPI();
    },[])

    const addToCart = async (product) => {

        dispacth(addProductToCarT(product))
        
    }

    return (
        <div id='product-component'>
            <h1> Products</h1>
            
            <div> Product Category <select>
                <option value='all'>All</option>
                {categoryData && categoryData.map((item, index) => (
                    <option key={index} value={item.category_id}>{item.category_name}</option>
                ))}
            </select>
            </div>
            
            <hr />

            <div className='product-container'>
                {products && products.map((item,index)=>(
                    <div className="product-card" key={index}>
                        <img src={item.product_image} />
                        <h1>{item.product_name}</h1>
                        <h3>Price : {item.product_price}</h3>
                        <button onClick={() => {
                            addToCart(item)
                        }}>
                            Add to cart</button>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default Products;