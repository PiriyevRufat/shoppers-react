import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'
const Header = () => {
  return (
    <nav>
        <div className="container">
        <div className="row">
        <div className="nav-top">
            <div className='nav-top-left'>
            <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text"  placeholder='Search'/>
            </div>
            <div className='nav-top-middle'>
                <Link>SHOPPERS</Link>
            </div>
            <div className='nav-top-right'>
                <a href=""><i class="fa-solid fa-user"></i></a>
                <a href=""><i class="fa-regular fa-heart"></i></a>
                <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
        </div>
        </div>
        <div className="container">
            <div className="row">
            <div className="nav-bottom">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/admin'>Admin</Link></li>
                <li><Link>Shop</Link></li>
                <li><Link>Catalogue</Link></li>
                <li><Link>New Arrivalls</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </div>
            </div>
        </div>
    </nav>
  )
}

export default Header