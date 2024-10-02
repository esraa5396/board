import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users(){

    // UseState
    const [users, setUsers] = useState([]);

    // State change when delete user
    const [runUseEffect, setRun] = useState(0);
    // UseEffect
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/user/show")
        .then((res) => res.json())
        .then((data) => setUsers(data))
    },[runUseEffect]); // Run UseEffect when deleting user

    // Delete Function
    async function deleteUser(id){
        try{
            const res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
            if(res.status === 200){
                console.log('run');
                setRun((prev) => prev + 1);
            }
        }
        catch{
            console.log("Error");
        }
}
        

    // Show User Const
    const showUsers = users.map((user,index) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <Link to={`${user.id}`}>
                    <i 
                        className="fa-solid fa-pen-to-square"
                        style={{ color: "#74afb9", fontSize: "20px", paddingRight: "20px" }}>
                    </i>
                </Link>
                <i 
                    onClick={() => deleteUser(user.id)} //delete function
                    className="fa-solid fa-trash-can"
                    style={{ color: "red", fontSize: "20px", cursor: "pointer" }}>
                </i>
            </td>
        </tr>
    ));

    return(
        <div style={{ padding: "20px"}}>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Users</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showUsers}
                </tbody>
            </table>
        </div>
    )
}