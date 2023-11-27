import axios from "axios";
import { useState } from "react";

function DeleteByEmail(props)
{
    const [deleteemail,setDeleteemail]=useState("")

    const handleDeleteemail=async (e) =>{
        e.preventDefault();

        try{
            await axios.delete(`http://localhost:4000/deletebyemail/${deleteemail}`).then(()=>{props.onfetch();})
        }
        catch(err)
        {
            console.log("Error in deleting record by email "+err.message)
        }
        
        setDeleteemail("");
        props.onfetch();
    }

    return (
        <div>
      <center>
        <h2>Delete Student By Email</h2>
      <br/>

      <form onSubmit={handleDeleteemail}>
        
        <label>Email of the student</label>
        <input type="text" id="deleteemail" placeholder="Enter Email To Delete" value={deleteemail} onChange={(e)=>setDeleteemail(e.target.value)}/>
        <br/><br/>

        <button>Delete Student By Email</button>
      </form>
      <br/>
      <br/>
      </center>

      </div>
    );
}


export default DeleteByEmail;