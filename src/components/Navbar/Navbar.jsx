import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext)

    const currencyHandler = (event) => {
        switch (event.target.value){
            case "usd": {
               setCurrency({name: "usd", symbol: "$"});
               break;
            }
            case "eur": {
                setCurrency({name: "usd", symbol: "€"});
                break;
             }
             case "gbp": {
                setCurrency({name: "gbp", symbol: "£"});
                break;
             }
             default : {
                setCurrency({name: "gbp", symbol: "£"});
                break;
             }       
        }
    }

  return (
    <div className='navbar'>
       <Link to={'/'}>
         <img src={logo} alt="" className='logo' height={75}/>
       </Link>
       <ul>
        <Link to={'/'}><li>Home</li></Link>
         <li>Features</li>
         <li>Pricing</li>
         <li>Blog</li>
       </ul>
       <div className="nav-right">
          <select onChange={currencyHandler}>
             <option value="usd">USD</option>
             <option value="eur">EUR</option>
             <option value="gbp">GBP </option>
          </select>
          <button>Sign up <img src={arrow_icon} alt=" "/> </button>
       </div>
    </div>
  )
}

export default Navbar
