import React, {useEffect} from "react";

import {useSelector} from 'react-redux'

function Cart() {
    const cartData = useSelector(state => state.cartData);

    useEffect(() => {
        console.log('cartData',cartData)
    },[cartData])


    return (
        <div>
            Cart Component cart size - {cartData.cart.length}

            <table>
                <tr>
                    <td>s no</td>
                    <td>Product Name</td>
                    <td>Product Category</td>
                    <td>Product Price</td>
                    <td>Product Quantity</td>
                    <td>Price</td>
                    <td>Delete</td>
                </tr>
                {cartData.cart && cartData.cart.map((item,index)=>(
                <tr key={index}>
                        <td>
                            {index+1}
                        </td>
                        <td>
                            {item['product_name']}
                        </td>
                        <td>
                            {item['category_id']}
                        </td>
                        <td>
                            {item['product_price']}
                        </td>
                    </tr>
                    ))}
            </table>

        </div>
    )
}
export default Cart;