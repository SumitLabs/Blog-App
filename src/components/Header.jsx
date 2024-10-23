import React from 'react'
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { TiTimes } from 'react-icons/ti'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import './header.css'
import Avatar from '/img/avatar.jpg'
import { Link } from "react-router-dom";
import Register from './Register';
import Login from './Login';
export const Header = () => {

    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);

    const [showAuth, setAuth] = useState(false);
    const closeAuth = () => setAuth(false)

    const [sign, setSign] = useState("Login");
    // Model 
    let Auth = () => {
        return <>
            <div className="modal_wrapper"></div>
            <div className="modal_container">
                <button onClick={closeAuth} className='close'>X</button>
                <div className="auth">
                    <div className="form_toggle">
                        <div onClick={() => { setSign("Sign Up") }} className={sign == "Sign Up" ? 'active' : ''}>Sign Up</div>
                        <div onClick={() => { setSign("Login") }} className={sign == "Login" ? 'active' : ''}>Log In</div>
                    </div>
                    {
                        sign === "Login" ? <Login /> : null
                    }
                    {
                        sign === "Sign Up" ? <Register /> : null
                    }
                </div>
            </div>
        </>
    }

    return (
        <div className="header">
            <div className="top_bar">
                <div className="search">
                    <form action="">
                        <input type="text" name="search" placeholder='search' autoComplete='off' required />
                        <button type='submit'><IoSearch /></button>
                    </form>
                </div>


                <div className="social_icon">
                    <Link to=""><FaInstagram /></Link>
                    <Link to=""><FaFacebookF /></Link>
                    <Link to=""><FaXTwitter /></Link>
                </div>
            </div>
            <div className="nav">
                <div className="logo">
                    <Link to='/'>Blog</Link>
                </div>
                <ul className={click ? 'nav-menu active' : "nav-menu"}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/create'>Write</Link></li>
                    <li><Link to='/articles'>Articles</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                </ul>
                <div className="btns">
                    <span id='user'>John kumar sharma</span>
                    <Link><img src={Avatar} alt="" width={35} /></Link>
                    <span id='auth' onClick={() => { setAuth(true) }}>Login</span>
                    {showAuth && <Auth closeAuth={closeAuth} />}
                </div>
                <div className="hamburger" onClick={handleclick}>
                    {click ? (<TiTimes />) : (<GiHamburgerMenu />)}
                </div>
            </div>
        </div>
    )
}
