import { useEffect,useState } from "react"
import {getStudents,deleteStudent} from "../Services/StudentServices"
import {Link} from 'react-router-dom'
import Studentform from "./Studentform"
import EditStudent from "./EditStudent"


export default function AddStudents(){
    const [students,Setstudents] = useState([])
    const [isnewform,Setisnewform] = useState(false)
    const [isUpdated,setIsUpdated] = useState(false)
    const [isnewUpdateform, setIsnewUpdateform] = useState(false)
    const [selectedStudent, setSelectedStudent] = useState(null)

    useEffect(()=>{
        let mounted =true;
        if(students.length && !isUpdated){
            return;
        }
        getStudents()
            .then(data => {
                if (mounted){
                    Setstudents(data)
                }
            })
            return () =>{ 
                mounted = false;
                setIsUpdated(false)
            }
    },[students,isUpdated])

    const handleadd =(e)=>{
        e.preventDefault();
        Setisnewform(true)
    }

    const handleUpdate = (student) => {
        console.log("Selected Student:", student);
        setSelectedStudent(student)
        setIsnewUpdateform(true)
        
    }

    const handleDelete =(studentid) => {
        if(window.confirm("Are you sure?")){
            console.log(studentid)
            deleteStudent(studentid)
                .then((result)=> {
                    alert("Student deleted successfully")
                    setIsUpdated(true)
                },
            (error)=>{
                alert("Failed to delete student")
            })
        }
    }
   
    

    return(
        <>
            <div className="tablebox">
            <p>
                <Link to='/studentpage' className="mylink">Back</Link>
            </p>
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
                                <td><button className="btn btn-primary" onClick={() => {handleUpdate(stu)}}>Edit</button></td>
                               
                                <td><button className="btn btn-danger" onClick={() => {handleDelete(stu.id)}}>Delete</button></td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                    </table>
                    
        </div>
        <button className="btn btn-success addbtn addbtn"
                            onClick={handleadd}>Add student</button>
                    {
                        isnewform && <Studentform Setisnewform = {Setisnewform} setisUpdated= {setIsUpdated}/>
                    }
                    {
                                   
                                   
                        isnewUpdateform && 
                        
                        <EditStudent setIsnewUpdateform = {setIsnewUpdateform} setisUpdated= {setIsUpdated} student = {selectedStudent}/>
                    }
        </>
        
    )
}