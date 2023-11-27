import { useState } from "react";

import axios from "axios";

function DeleteByName(props)
{
    
const [deletename,setDeletename]=useState("")


const handleDelete= async (e)=>{
  e.preventDefault();

  try{
    axios.delete(`http://localhost:4000/delete/${deletename}`).then(()=>{props.onfetch()});
     
    setDeletename("");
  }
  catch(error){
    console.error("Error in deleting record by name ",error.message)
  }

}


return (
    <div>
      <center>
        <h2>Delete Student By Name</h2>
      <br/>

      <form onSubmit={handleDelete}>
        
        <label>Name of the student</label>
              <input type="text" id="name" placeholder="Enter Name To Delete" value={deletename} onChange={(e)=>setDeletename(e.target.value)}/>
                    <br/> <br/>

        <button>Delete Student By Name</button>
      </form>

      <br/>
      </center>
      </div>
)

}

export default DeleteByName;