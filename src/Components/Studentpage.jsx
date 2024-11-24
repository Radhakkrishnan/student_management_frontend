import { useState } from "react"
import {Link} from 'react-router-dom'
import Studentlist from "./Studentlist";

export default function Studentpage()
{
    
    return(
       

        <>
            <nav className="navbar mynav">
                <h1 className="navbar-brand text-light">Student List</h1>
                <ul className="navbar nav">
                    <li>
                        <Link to='/' className=" mylink">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addstudents" className="mylink">Add students</Link>
                    </li>
                </ul>
            </nav>
            <Studentlist/>

        </>
    )
}