import './../index.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <ul className="navbar">

                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/services">Services</Link></li>


            </ul>
        </>
    )
}
