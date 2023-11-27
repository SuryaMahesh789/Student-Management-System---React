import { useState } from "react";
import axios from "axios";

function SearchByName(props){
    const [searchname,setSearchname]=useState("")
    const [found,setFound]=useState(2)

    const [updatename,setUpdatename] = useState("");
    const [updateage,setUpdateage]=useState(0)
    const [updategender,setUpdategender]=useState("")
    const [updateemail,setUpdateemail]=useState("")

    const [foundname,setFoundname] = useState("");
    const [foundage,setFoundage]=useState(0)
    const [foundgender,setFoundgender]=useState("")
    const [foundemail,setFoundemail]=useState("")

      const handleSearch = async (e)=>{
    e.preventDefault();

    try{
      const result = await axios.get(`http://localhost:4000/${searchname}`)
      if(result.data.length>0)
      {
      setFound(1)
      console.log(result.data);

      setUpdatename(result.data[0].name)
      setUpdateage(result.data[0].age)
      setUpdateemail(result.data[0].email)
      setUpdategender(result.data[0].gender)

      setFoundname(result.data[0].name);
      setFoundage(result.data[0].age);
      setFoundemail(result.data[0].email);
      setFoundgender(result.data[0].gender);
      }
      else{
        setFound(0)
      }
      
    }
    catch(err)
    {
      console.log("Found Error in try catch block of handleSearch Event "+err)
    }
  }

  const handleUpdate = async (e)=>{
    e.preventDefault();

    await axios.put(`http://localhost:4000/put/${searchname}`,{
      data:{
        name:updatename,
        age:updateage,
        email:updateemail,
        gender:updategender
      }

    }).then(()=>{props.onfetch()})

    setUpdatename("")
    setUpdateage(0)
    setUpdateemail("")
    setUpdategender("")

    setSearchname("")
    setFound(2)

  }

    return(
    <div >
      <center>
        <br/>
      <br/>

      <h2>Search Student By Name & Update</h2>
      <br/>

      <form onSubmit={handleSearch}>
        
        <label>Name of the student</label>
          <input type="text" placeholder="Enter name to Search" value={searchname} onChange={(e)=>setSearchname(e.target.value)}/>
           <br/> <br/>
          <button>Search</button>

      </form>
      
      <br/>

      {
        found===1 
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
        found===0
        &&
        <h3>Search Results Not Found !!!</h3>
         
      }
      
      {
        found===1 
        &&
        <>
        <h2>Student Found In Database</h2>
        
        <form onSubmit={handleUpdate} style={{ backgroundcolor: 'blue'}}>
          <label>Name of the student</label>
          <input type="text" id="updatename" placeholder="Enter Your Name" value={updatename} disabled onChange={(e)=>setUpdatename(e.target.value)}/>
        <br/>

        <label>Age of the student</label>
        <input type="number" id="updateage" placeholder="Enter Your Age" value={updateage} onChange={(e)=>setUpdateage(e.target.value)}/>

        <br/>
        <label>Email of the student</label>
        <input type="text" id="updateemail" placeholder="Enter Your Email" value={updateemail} onChange={(e)=>setUpdateemail(e.target.value)}/>

        <br/>
        <label>Gender of the student</label>
        <input type="text" id="updategender" placeholder="Enter Your Gender" value={updategender} onChange={(e)=>setUpdategender(e.target.value)}/>

        <br/><br/>

        <button >Update</button>
        </form>
        </>
      
      }
      <br/>
      </center>
      <br/>
      </div>
    );
}

export default SearchByName;