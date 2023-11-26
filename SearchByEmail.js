
import axios from "axios";

import { useState } from "react";

function SearchByEmail(props)
{
    const [searchemail,setSearchemail]=useState("")
    const [find,setFind]=useState(2);

    const [foundname,setFoundname] = useState("");
    const [foundage,setFoundage]=useState(0)
    const [foundgender,setFoundgender]=useState("")
    const [foundemail,setFoundemail]=useState("")

     const handleSearchbyemail = async (e) => {
    e.preventDefault();

    try{
        const result = await axios.get(`http://localhost:4000/searchbyemail/${searchemail}`)
        console.log(result.data.length>0)
        if(result.data.length>0)
        {
          setFind(1);
          setFoundname(result.data[0].name);
          setFoundage(result.data[0].age);
          setFoundemail(result.data[0].email);
          setFoundgender(result.data[0].gender);
        }
        else{
          setFind(0)
        }
        console.log(result.data)
    }
    catch(err)
    {
      console.log("Error in searching by email "+err)
    }
  }

    return (

    <div>
      <center>
        <br/>

      <h2>Search Student By Email</h2>
      <br/>

      <form onSubmit={handleSearchbyemail}>
        
        <label>Email of the student</label>
          <input type="text" placeholder="Enter email to Search" value={searchemail} onChange={(e)=>setSearchemail(e.target.value)}/>
           <br/> <br/>
          <button>Search</button>
      </form>
      
      <br/>

      {
        find===1 
        &&
        <>
        <h2>Search Results Found</h2>
        <table>
            <tr>
                <th><b>Name &nbsp;&nbsp;</b></th>
                <th><b>Age</b></th>
                <th><b>Email&nbsp;&nbsp;&nbsp;&nbsp;</b></th>
                <th><b>Gender</b></th>
            </tr>

            <tr>
            <td>{foundname}</td>
            <td>{foundage}</td>
            <td>{foundemail}</td>
            <td>{foundgender}</td>
            </tr> 

        </table>
        </>
      }

      <br/>

      {
        find===0 
        &&
        <>
        <h3>Search Results Not Found !!!</h3>
        </>
      }
      </center>

      </div>
    )
}

export default SearchByEmail;