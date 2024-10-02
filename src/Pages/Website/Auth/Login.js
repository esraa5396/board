import { useState } from "react";
import axios from "axios";
import Header from '../../../Components/Header';
import './login.css';


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accept, setAccept] = useState(false);
    const [emailError, setEmailError] = useState("");

    async function  Submit(e){
        let flag = true;
        e.preventDefault();
        setAccept(true); 
        if(password.length < 8 ){
            flag = false;
        }else{
            flag = true;
        }
        try{
            if(flag){
                // Send Data
                let res = await axios.post('http://127.0.0.1:8000/api/login',{
                    email: email,
                    password: password,
                });
                if(res.status === 200){
                    window.localStorage.setItem("email",email);
                    window.location.pathname = "/";
                }
            }    
        }catch(err){
            setEmailError(err.response.status);
        }
    }
    
    return(
        <div>
            <Header />
            <div className="parent login">
                <div className="register login">
                    <form onSubmit={Submit}>
                        
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            placeholder="Email..." 
                            id="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}>
                        </input>
                        {accept && emailError === 422 && <p className="error">Email is already been taken</p>}
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            placeholder="password..." 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}>
                        </input>
                        {password.length < 8 && accept && <p className="error">Password must be more than 8 Char</p>}
                        <div style={{ textAlign:"center" }}>
                            <button type="submit">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}