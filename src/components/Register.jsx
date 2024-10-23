import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from 'react';
import './header.css'
const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    })
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUser({ ...user, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <form onSubmit={handleSubmit} method='POST'>

            <div className="input_box">
                <FaUser className='input_icon' />
                <input
                    type="text"
                    name="username"
                    placeholder='Username'
                    id='username'
                    value={user.username}
                    onChange={handleInput}
                    required
                />
            </div>


            <div className="input_box">
                <MdEmail className='input_icon' />
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    id='email'
                    value={user.email}
                    onChange={handleInput}
                    required
                />
            </div>

            <div className="input_box">
                <FaLock className='input_icon' />
                <input
                    type="password"
                    name="password"
                    placeholder='password'
                    id='password'
                    value={user.password}
                    onChange={handleInput}
                    required
                />
            </div>
            <button className="form_btn" type='submit'>Sign Up</button>
        </form>
    )
}

export default Register