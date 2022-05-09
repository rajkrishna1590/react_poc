import React, {useEffect, useState} from "react";
import { getProducts,getCategories,addProduct } from '../../../service/adminService';

function AdminPanelProduct() {

    const [productLists, setProductLists] = useState([]);
    const [categoryLists, setCategoryLists] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productDesc, setProductDesc] = useState('');
    



    const getProductsFromAPI = async () => {
        
        try {
            const categoriesData = await getCategories();
            setCategoryLists(categoriesData);
            const products = await getProducts();
            setProductLists(products)
            console.log('products')
        } catch (e) {
            console.log(e)
        }
        
    }

    useEffect(() => {

        getProductsFromAPI()
        
    }, [])

    const getCategoryName = (categoryId) => {

        let category = categoryLists.filter((item) => item.category_id === categoryId)[0];
        return category.category_name;
        
    }

    const callAddProductAPI = async() => {
        let payload = {
            product_name: productName,
            product_desc: productDesc,
            product_image: productImage,
            product_price: productPrice,
            category_id:selectedCategoryId
        }
        

        await addProduct(payload);
        await getProductsFromAPI();
    }
    
    return (
        <div>
            <h1>Admin panel - Products Component</h1>

            <hr />

            <table>
                <tr>
                    <td>S No</td>
                    <td>Product ID</td>
                    <td>Product Name</td>
                    <td>Product Category</td>
                    <td>Product Price</td>
                    <td>Product image</td>
                    <td>Product Desc</td>                    
                </tr>

                {productLists && productLists.length && productLists.map((item, index) => (
                    <tr key={index}>
                        <td>
                            {index+1}
                        </td>
                        <td>
                            {item['product_id']}
                        </td>
                        <td>
                            {item['product_name']}
                        </td>
                        <td>
                            {getCategoryName(item['category_id'])}
                        </td>
                        <td>
                            {item['product_price']}
                        </td>
                        <td>
                           <img src={item['product_image']} width='50' height='50' />
                        </td>
                        <td>
                            {item['product_desc']}
                        </td>
                    </tr>
                ))}

            </table>
            <hr />


            <h1>Create Product</h1>
            <div>
                <div>
                    Product Category : <select onChange={(e) => {
                        let selectedValue = e.target.value;
                        setSelectedCategoryId(selectedValue);
                    }}>
                        <option value=''>Select Category</option>
                        {categoryLists.map((item,index) => (
                            <option key={index} value={item.category_id}>{item.category_name}</option>
                        ))}
                    </select>
                </div>
                
                <div> Product Name : <input onChange={(e) => {
                    let value = e.target.value;
                    setProductName(value)
                }} type='text' value={productName} /></div>

                <div> Product Price : <input onChange={(e) => {
                    let value = e.target.value;
                    setProductPrice(value)
                }} type='text' value={productPrice} /> </div>
                
                <div> Product Description : <input onChange={(e) => {
                     let value = e.target.value;
                     setProductDesc(value)
                }} type='text' value={productDesc} /> </div>
                
                <div>Product image: <input onChange={(e) => {
                     let value = e.target.value;
                     setProductImage(value)
                }}  type='text' value={productImage} /></div>

                <button onClick={() => {

                    callAddProductAPI()
                    
                }} disabled={selectedCategoryId==='' || productImage==='' || productName==='' || productPrice==='' || productDesc===''}>Create Product</button>
                

            </div>
        </div>
    )
}
export default AdminPanelProduct;