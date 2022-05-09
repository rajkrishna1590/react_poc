import React, { useEffect, useState } from "react";

import { getCategories, addCategory } from '../../../service/adminService';
 

/**
 * Category - functional component
 * 
 * @return {*} 
 */
function Category() {

    const [categories, setCategories] = useState([]);

    const [categoryName, setCategoryName] = useState('')
    const [categoryDesc,setCategoryDesc]= useState('')


    const getCategoriesDataFromAPI = async () => {
        try {
            const categoryData = await getCategories();
            setCategories(categoryData)
        } catch (e)
        {
        console.log(e)    
        }
    }
    useEffect(() => {
        console.log('rendered');
        getCategoriesDataFromAPI();
    }, []);

    const addNewCategory = async() => {

        console.log('button click')
        try {
            let addNewCategory = {
                category_name: categoryName,
                category_desc: categoryDesc,
            };
            await addCategory(addNewCategory)
            await getCategoriesDataFromAPI()
        }
        catch (e) {
            console.log(e)
        }
        
    }


    return (
        <div>
            <h1>Category Lists</h1>
            <hr />
            {categories && categories.length && (
            <div>
                <table>
                    <tr><td>Category Id</td><td>Category Name</td><td>Category Desc</td></tr>
                    {categories.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.category_id}</td>
                            <td>{item.category_name}</td>
                            <td>{item.category_desc}</td>
                        </tr>
                        ))}
                </table>
                </div>
            )}
            <hr />
            <h1>Add New Category</h1>
            <div>
                <div>Category Name : <input type='text' value={categoryName} onChange={((e) => {
                    let value = e.target.value;
                    setCategoryName(value)

                })} /></div>
                <div>Category Description : <input type='text' value={categoryDesc} onChange={((e) => {
                    let value = e.target.value;
                    setCategoryDesc(value)

                })} /></div>

                <button disabled={categoryName === '' || categoryDesc === ''} onClick={() => {
                    addNewCategory()
                }} >Add new Category</button>
            </div>
        </div>
    )
}
export default Category;