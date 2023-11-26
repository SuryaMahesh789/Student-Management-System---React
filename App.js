import { useState,useEffect } from "react";
import axios from "axios";

import {Routes,Route, Link} from 'react-router-dom';

import './App.css';

import Add from './Add';
import SearchByName from './SearchByName';
import DeleteByName from './DeleteByName';
import SearchByEmail from "./SearchByEmail";
import DeleteByEmail from "./DeleteByEmail";
import Dashboard from "./Dashboard";

function App() {

const [items,setItems] = useState([]);

useEffect(()=>{
  fetchitems();
},[]);

const fetchitems= async (e) => {
  try{
    const response = await axios.get("http://localhost:4000/");
    console.log(response.data);
    setItems(response.data)
  }
  catch(err)
  {
    console.log(err);
    console.log(e);
  }
}

  return (
    <div className="App">

        <center><h1> Student Management System</h1></center>

        <nav>
        <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/Add">Add</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/SearchByName">Search By Name</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/DeleteByName">Delete By Name</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/SearchByEmail">Search By Email</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/DeleteByEmail">Delete By Email</Link>&nbsp;&nbsp;&nbsp;
        </nav>

        <br/><br/>
      
        <Routes>
          <Route exact path ="/Add"  element={<Add onfetch={fetchitems}/>}/>
          <Route exact path ="/SearchByName" element={<SearchByName onfetch={fetchitems}/>}/>
          <Route exact path ="/DeleteByName" element={<DeleteByName onfetch={fetchitems}/>}/>
          <Route exact path ="/SearchByEmail" element={<SearchByEmail onfetch={fetchitems}/>}/>
          <Route exact path ="/DeleteByEmail" element={<DeleteByEmail onfetch={fetchitems}/>}/>
        </Routes>
        <br/><br/>
        <Dashboard items={items}/>
        
    </div>


  );
}

export default App;
