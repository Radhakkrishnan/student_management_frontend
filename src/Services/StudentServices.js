import axios from 'axios';

export  function getStudents(){
    return(
        axios.get("http://127.0.0.1:8000/students/")
            .then(response => response.data)
            .catch(error => {
                console.error("Error fetching students:", error);
                throw error;})
    )
}

export function addStudent(student){
    return(
        axios.post("http://127.0.0.1:8000/students/",{
            FirstName: student.firstname,
            LastName: student.lastname,
            DateOfBirth: student.dob,
            Gender: student.gender,
            BloodGroup: student.bloodgroup,
            ContactNo: student.number,
            Address: student.address,
        })
            .then(response => response.data)

    )
}

export function Updatestudent(stuid,student){
    return(
        axios.put(`http://127.0.0.1:8000/students/${stuid}`,{
            FirstName: student.firstname,
            LastName: student.lastname,
            DateOfBirth: student.dob,
            Gender: student.gender,
            BloodGroup: student.bloodgroup,
            ContactNo: student.number,
            Address: student.address,
        })
            .then(response => response.data)
    )
}

export function deleteStudent(studentid){
    return(
        axios.delete(`http://127.0.0.1:8000/students/${studentid}`,
            {
                method:'DELETE',
                headers:{
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }
            }
        )
        
            .then(response => response.data)
            
    )
}