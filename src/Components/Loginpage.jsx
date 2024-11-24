import {Link, Navigate, useNavigate} from 'react-router-dom'
import { useState } from 'react'

export default function Loginpage(){
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === "admin" && password === "admin@1234"){
            alert("Logged in successfully")
            Navigate('/studentpage')
        }
            
        else{
            alert("invalid username or password")
        }
        }
            
   
    return(
        <div className="loginbox">
            <h1>LOG-IN</h1>
            <form className="form-control form" onSubmit={handleSubmit}>
                <input  type="text" 
                        placeholder="Username" 
                        className="form-control" 
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}/>



                <input   type="password"
                         placeholder="password"
                         className="form-control"
                         onChange={(e) => setPassword(e.target.value)}
                         value = {password}/>




                <button type="submit" className="form-control btn btn-outline-primary">Submit</button>
            </form>
            <p>
                <Link to="/" className="text-light">
                    close
                </Link>
            </p>
        </div>
    )
}
