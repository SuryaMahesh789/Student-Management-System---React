
import axios from "axios";
import { useState } from "react";

function Add(props)
{

    const [name,setName] = useState("");
    const [age,setAge]=useState(0)
    const [gender,setGender]=useState("")
    const [email,setEmail]=useState("")


    const handleSubmit= async (e)=>{
        e.preventDefault()

        const response =await  axios.post("http://localhost:4000/add",{
            data:{
            name:name,
            age:age,
            email:email,
            gender:gender
            }
        }).then(()=>{props.onfetch()}).catch((err)=>{console.log("Error in Posting "+err)})

        console.log(response)

        setName("")
        setAge(0)
        setEmail("")
        setGender("")
    }

    return (
        <div>
            <center>
        
        <h2>Add Student Into Database</h2>
        <form onSubmit={handleSubmit}>
        <label>Name of the student</label>
        <input type="text" id="name" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        
        <label>Age of the student</label>
        <input type="Number" id="age" placeholder="Enter Your Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <br/>

        
        <label>Email of the student</label>
        <input type="text" id="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>

        
        <label>Gender of the student</label>
        <input type="text" id="gender" placeholder="Enter Your Gender" value={gender} onChange={(e)=>setGender(e.target.value)}/>
        <br/>

        <button >Add Student</button>
        <br/>
      </form>
            </center>
        
        </div>
    );
}

export default Add;