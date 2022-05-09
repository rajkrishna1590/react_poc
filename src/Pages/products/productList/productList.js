import React from "react";

import {useParams} from 'react-router-dom'

import categories from "../../../data/data";

function ProductList() {

    const params = useParams();

    console.log('categories',categories)

    const category = categories.filter((item) => item.categoryName === params.categoryName)[0];

    console.log('matched category',category)
    
    
    console.log('params',category)
    return (
        <div id="ProductList">
            <h1> Products Listing - {category.categoryName}</h1>
            
            {category.products && category.products.map((item, index) => (
                <div key={index}>
                    <div><img src={item.image} /></div>
                    <div>{item.productName}</div>
                </div>
            ))}
        </div>
    )
}

export default ProductList;