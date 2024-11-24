import { useEffect,useState } from "react";
import { addStudent } from "../Services/StudentServices";


export default function Studentform({Setisnewform , setisUpdated}){
    const [firstname, setFirstname] = useState('');
    const [lastname,setLastname] = useState("");
    const [dob,setDob] = useState('');
    const [gender,setGender] = useState('');
    const [bloodgroup,setBloodgroup] = useState('');
    const [number, setNumber] = useState(0);
    const [address,setAddress] = useState('')
    
    const handleclose = () =>{
        Setisnewform(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Setisnewform(false)
        addStudent({
            firstname,
            lastname,
            dob,
            gender,
            bloodgroup,
            number,
            address,
        })
            .then((result) => {
                alert("Student added successfully!!")
                setisUpdated(true)
            },
            (error) => {
                alert("failed to add")
            })
    }

    return(
        <div className="modal">
            <div className="popupcontent">
           
            <div className="studentform">
            <form className="form-control form" onSubmit={handleSubmit}>
            <label htmlFor="firstname">Firstname</label>
                 <input type="text"
                       className="form-control"
                       name="firstname"
                       onChange={(e) => setFirstname(e.target.value)}/>

                <label htmlFor="lastname">Lastname</label>
                <input type="text"
                       className="form-control"
                       name="lastname"
                       onChange={(e) => setLastname(e.target.value)} />

                <label htmlFor="dob">Date Of Birth</label>
                <input type="date"
                       name="dob"
                       className="form-control"
                       onChange={(e) => setDob(e.target.value)}/>

                <label htmlFor="gender">Gender</label>
                <input   type="text"
                         name="gender"
                         className="form-control"
                         onChange={(e) => setGender(e.target.value)}/>

                <label htmlFor="blood">Blood Group</label>
                <input type="text"
                       name="blood"
                       className="form-control"
                       onChange={(e) => setBloodgroup(e.target.value)}/>

                <label htmlFor="number">Contact Number</label>
                <input type="number"
                       className="form-control"
                       name="number"
                       onChange={(e) => setNumber(e.target.value)} />

                <label htmlFor="address">Address</label>
                <input type="text"
                       className="form-control"
                       name="address"
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