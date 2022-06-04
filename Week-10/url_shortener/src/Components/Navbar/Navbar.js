import styles from './Navbar.module.css'
import React,{useState,useEffect} from 'react'
import { Link ,useLocation} from "react-router-dom";


function Navbar() {
  let location=useLocation();
  const [path, setPath] = useState('')
  
  useEffect(()=>{
    console.log('location',location);
    setPath(location.pathname)
  },[useLocation()])

  return (
    <div className={styles.navbarContainer}>
        
        <span className={styles.logo}><Link to='/'> Shortly </Link></span>

        <ul>
            <li className={path==='/feautures' && styles.current}><Link to='/feautures'> Feautures </Link></li>
            <li className={path==='/pricing' && styles.current}><Link to='/pricing'> Pricing </Link></li>
            <li className={path==='/resources' && styles.current}><Link to='/resources'> Resources </Link></li>
        </ul>

        <ul>
            <li>Login</li>
            <li>Sign Up</li>
        </ul>
    </div>
  )
}

export default Navbar