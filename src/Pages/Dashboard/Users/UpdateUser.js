import { useEffect, useState } from "react";
import Forms from '../../../Components/Forms/Form';

export default function UpdateUser(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const id = window.location.pathname.split("/").slice(-1)[0];

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setName(data[0].name);
            setEmail(data[0].email);
        })
    },[])

    return(
        <>
            <h1>Update User</h1>
            <Forms 
                button='Update' 
                name={name} 
                email={email} 
                endPoint={`user/update/${id}`}
                navigate="dashboard/users"
                hasLocalStorage = {false}
                buttonStyle = {true}
                />
        </>
    )
}
