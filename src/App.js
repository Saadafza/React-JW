import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Edit from './pages/Edit';
import StudentDetail from "./pages/StudentDetails"
import Search from './pages/Search';
import Footer from './Footer';
import SearchFeild from './pages/SearchFeild';
import { useEffect, useState } from 'react';
import axios from 'axios';






function App() {
  // const [products, setProducts] = useState([]);
  // useEffect(()=>{
  //   axios.get("http://localhost:3000/products").then((res)=>{
  //     console.log(res.data);
  //     if(res.data.status== true){
  //       setProducts(res.data.products);
      
  //     }
  //   })
  // },[]);
  return (
    <div className='container'>
      <Navbar />
      <SearchFeild />
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path='/search' element={<Search />} />
      <Route path='/student/:id' element={<StudentDetail />} /> 
      <Route path='/edit/:id' element={<Edit />} /> 
    </Routes>
    <Footer />
    </div>
  
  );
}

export default App;