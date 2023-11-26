
function Dashboard(props)
{
    return(
    <div>
        <center>
            <h2>Dashboard</h2>
        
        <table>
            <tr>
                <th><b>Name &nbsp;&nbsp;</b></th>
                <th><b>Age</b></th>
                <th><b>Email&nbsp;&nbsp;&nbsp;&nbsp;</b></th>
                <th><b>Gender</b></th>
            </tr>

            {props.items.map((item)=>(
            <tr  key={item._id}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            </tr> 
            ))

            }
        </table>
        <br/>
        <br/>
        </center>

      </div>
    );
}


export default Dashboard;