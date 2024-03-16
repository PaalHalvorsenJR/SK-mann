import React, {useState} from 'react'
import logo from '../assets/dalle.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/NavBar.css'

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => { setOpenLinks(!openLinks); }


  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
          <img src={logo} alt="Logo" />
          <div className='hiddenLinks'>
              <Link to="/">Hjem</Link>
              <Link to ="/terminliste">Terminliste </Link>
              <Link to="/resultater">Resultater</Link>
              <Link to="/lag">Lag</Link>
          </div>
        </div>
        <div className='rightSide'> 
            <Link to="/">Hjem</Link>
            <Link to ="/terminliste">Terminliste </Link>
            <Link to="/resultater">Resultater</Link>
            <Link to="/lag">Lag</Link>
            <button onClick={toggleNavbar}>
              <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar;
