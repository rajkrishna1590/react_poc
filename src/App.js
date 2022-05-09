import React, {useEffect} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Pages from './Pages/pages';
import About from './Pages/About/About';
import Products from './Pages/products/Products';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import ProductList from './Pages/products/productList/productList';
import Admin from './Pages/admin/admin';
import Category from './Pages/admin/category/category';
import AdminPanelProduct from './Pages/admin/products/products';

import { getCategories } from './service/adminService';

import { useDispatch } from 'react-redux';
import { setCategoryData } from '../src/redux/action/action';

import Cart from '../src/Pages/Cart/Cart'



function App() {

  const dispacth = useDispatch();


  const getCategoriesDataFromAPI = async() => {
    const categoryData = await getCategories();
    dispacth(setCategoryData(categoryData));
  }

  useEffect(() => {
    getCategoriesDataFromAPI();
  }, [])
  

  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Pages />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/products' element={<Products />}>
            <Route path='/products/:categoryName' element={<ProductList />}></Route>
          </Route>
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/category' element={<Category />} />
          <Route path='/admin/products' element={<AdminPanelProduct />} />
        </Route>
       
      </Routes>
    </div>
  );
}

export default App;
