import { useContext, useEffect, useState } from "react";
import axios from "axios";
import './index.css';
import {User} from '../../Pages/Website/Context/Context';

export default function Forms(props){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordR, setPasswordR] = useState("");
    // const [accept, setAccept] = useState(false);
    const [emailError, setEmailError] = useState("");

    const userNow = useContext(User);
    console.log(userNow);

    const styleRegister = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px"
    }

    const form = {
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        width: "400px"
    }

    const button = {
        width: "100%"
    }

    useEffect(() =>{
        setName(props.name);
        setEmail(props.email);
    },[props.name, props.email]);

    async function  Submit(e){
        // let flag = true;
        e.preventDefault();
        // setAccept(true); 
        // if(name === "" || password.length < 8 || passwordR !== password){
        //     flag = false;
        // }else{
        //     flag = true;
        // }
        try{

            // Send Data
            let res = await axios.post(`http://127.0.0.1:8000/api/${props.endPoint}`,{
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordR,
            });
            const token = res.data.data.token;
            const userDetails = res.data.data.user;
            userNow.setAuth({token, userDetails});

        }catch(err){
            setEmailError(err.response.status);
        }
    }

    return(
        <div className="register" 
        style={ props.styleRegister && styleRegister}>
            <form style={props.styleRegister && form} onSubmit={Submit}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    placeholder="Name..." 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}>
                </input>
                {/* {name === "" && accept && <p className="error">Username is required</p>} */}
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    placeholder="Email..." 
                    id="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                {/* {accept && emailError === 422 && <p className="error">Email is already been taken</p>} */}
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    placeholder="password..." 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                {/* {password.length < 8 && accept && <p className="error">Password must be more than 8 Char</p>} */}
                <label htmlFor="repeat">Repeat Password:</label>
                <input 
                    type="password" 
                    placeholder="Repeat Password..." 
                    id="repeat" 
                    value={passwordR}
                    onChange={(e) => setPasswordR(e.target.value)}>                            
                </input>
                {/* {passwordR !== password && accept && <p className="error">Password dose not match</p>} */}
                <div style={{ textAlign:"center" }}>
                    <button type="submit" style={props.buttonStyle && button}>{props.button}</button>
                </div>
            </form>
        </div>
    )
}