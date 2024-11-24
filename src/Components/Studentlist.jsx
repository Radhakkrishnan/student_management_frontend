import { useEffect,useState } from "react";
import {getStudents} from '../Services/StudentServices.js'

export default function Studentlist() {
    const [students,Setstudents] = useState([])

    useEffect(()=>{
        let mounted =true;
        getStudents()
            .then(data => {
                if (mounted){
                    Setstudents(data)
                }
            })
            return () => mounted = false;
    },[])

    return(
        <div className="tablebox">
            <table>
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">FIRSTNAME</th>
                        <th scope="col">LASTNAME</th>
                        <th scope="col">DOB</th>
                        <th scope="col">GENDER</th>
                        <th scope="col">BLOOD_GROUP</th>
                        <th scope="col">CONTACT_NO</th>
                        <th scope="col">ADDRESS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((stu) => {
                            return (
                                <tr key = {stu.id}>
                                <th>{stu.id}</th>
                                <td>{stu.FirstName}</td>
                                <td>{stu.LastName}</td>
                                <td>{stu.DateOfBirth}</td>
                                <td>{stu.Gender}</td>
                                <td>{stu.BloodGroup}</td>
                                <td>{stu.ContactNo}</td>
                                <td>{stu.Address}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                    </table>
        </div>
    )
}