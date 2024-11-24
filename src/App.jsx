import Loginpage from "./Components/Loginpage";
import Studentpage from "./Components/Studentpage";
import Mainpage from "./Components/Mainpage";

import AddStudents from "./Components/AddStudents";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState , useEffect} from "react";

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path='/' element={<Mainpage/>}></Route>
        <Route path="/studentpage" element={<Studentpage/>}/>
        
        <Route path='/addstudents' element={<AddStudents/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
