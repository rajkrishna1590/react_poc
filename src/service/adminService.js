import axios from "axios";


axios.interceptors.request.use((config) => {
    console.log('interceptor triggered',config.url);
    config.headers.common.userId = 'rajkumar'
    return config;
})


export const getCategories = () => {

    
    
    let url = 'http://localhost:3000/categories';
    console.log('service method triggered',url);
    return axios.get(url, {})
    .then((res) => {
        console.log(res);
        return res.data;
    })
    .catch(e => {
        throw e;
    })

}

export const addCategory = (newCategoryData) => {
    
    let url = 'http://localhost:3000/addnewcategory';
    return axios.post(url, newCategoryData, {})
    .then((res) => {
        console.log(res);
        return res.data;
    })
    .catch(e => {
        throw e;
    })

}

export const getProducts = () => {
    let url = 'http://localhost:3000/products';

    return axios.get(url, {})
    .then((res) => {
        console.log(res);
        return res.data;
    })
    .catch(e => {
        throw e
    })
}

export const addProduct = (newProductData) => {
    
    let url = 'http://localhost:3000/addnewproduct';
    return axios.post(url, newProductData, {})
    .then((res) => {
        console.log(res);
        return res.data;
    })
    .catch(e => {
        throw e;
    })

}