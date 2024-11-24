import { useState , useEffect } from "react";
import { Updatestudent } from "../Services/StudentServices";



export default function EditStudent({setIsnewUpdateform, setisUpdated, student}){
    
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('' )
    const [dob, setDob] = useState('' )
    const [gender,setGender] = useState('' )
    const [bloodgroup, setBloodgroup] = useState('' )
    const [number, setNumber] = useState('' )
    const [address, setAddress] = useState('') 

    useEffect(() => {
        if(student){
            setFirstname(student.FirstName || "");
            setLastname(student.LastName || "");
            setDob(student.DateOfBirth || "");
            setGender(student.Gender || "");
            setBloodgroup(student.BloodGroup || "");
            setNumber(student.ContactNo || "");
            setAddress(student.Address || "");
        }
    },[student])

    const handleclose = () =>{
        setIsnewUpdateform(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsnewUpdateform(false)
        console.log("Student ID for update:", student.id);
        
        Updatestudent(student.id,{
            firstname,
            lastname,
            dob,
            gender,
            bloodgroup,
            number,
            address,
        })
            .then((result) => {
                alert("Student updated successfully!!")
                setisUpdated(true)
            },
            (error) => {
                alert("failed to add")
            })
    }
    return(
        <div className="modal">
            <div className="popupcontent">
           <h1>Update student</h1>
            <div className="studentform">
            <form className="form-control form" onSubmit={handleSubmit}>
            <label htmlFor="firstname">Firstname</label>
                 <input type="text"
                       className="form-control"
                       name="firstname"
                       value={firstname}
                       onChange={(e) => setFirstname(e.target.value)}/>

                <label htmlFor="lastname">Lastname</label>
                <input type="text"
                       className="form-control"
                       name="lastname"
                       value={lastname}
                       onChange={(e) => setLastname(e.target.value)} />

                <label htmlFor="dob">Date Of Birth</label>
                <input type="date"
                       name="dob"
                       className="form-control"
                       value={dob}
                       onChange={(e) => setDob(e.target.value)}/>

                <label htmlFor="gender">Gender</label>
                <input   type="text"
                         name="gender"
                         className="form-control"
                         value={gender}
                         onChange={(e) => setGender(e.target.value)}/>

                <label htmlFor="blood">Blood Group</label>
                <input type="text"
                       name="blood"
                       className="form-control"
                       value={bloodgroup}
                       onChange={(e) => setBloodgroup(e.target.value)}/>

                <label htmlFor="number">Contact Number</label>
                <input type="number"
                       className="form-control"
                       name="number"
                       value={number}
                       onChange={(e) => setNumber(e.target.value)} />

                <label htmlFor="address">Address</label>
                <input type="text"
                       className="form-control"
                       name="address"
                       value={address}
                       onChange={(e) => setAddress(e.target.value)}/>

            <div className="btncontainer">
                <button className="btn btn-outline-primary" type="submit">submit</button>
                <button className="btn btn-outline-danger" onClick={handleclose}>Close</button>
            </div>
            </form> 
        </div>
     </div>
            
        </div>
    )
}