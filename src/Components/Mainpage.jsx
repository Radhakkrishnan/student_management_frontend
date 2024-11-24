import {Link} from 'react-router-dom'

export default function Mainpage(){
    return(
    <>
           <nav className="navbar mynav"> 
                <h1 className="navbar-brand text-light">CMS college of Engineering</h1>
                <ul className="navbar nav">
                    <li className="nav-item">
                       <Link to="/login" className="mylink"> Log-in</Link>
                    </li>
                </ul>
           </nav>
           <h3 className="para">A college is more than just a place of education; it’s a vibrant hub where students explore their passions, build lifelong friendships, and prepare for the future. It serves as a bridge between school and the professional world, offering not only academic knowledge but also opportunities to develop <span className="text-warning">critical thinking, teamwork, and leadership skills</span> . From bustling classrooms to serene libraries, and from cultural festivals to extracurricular activities, college life is a journey of <span className="text-warning">self-discovery and growth</span> . It’s a space where diverse ideas converge, shaping well-rounded individuals ready to make their mark on the world.</h3>
        
    </>
    )
}