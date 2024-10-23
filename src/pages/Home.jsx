import React from 'react'
import "./home.css"
import { Counter } from '../components/Counter'
import { Posts } from '../components/Posts'
import { Ebook } from '../components/Ebook'
export const Home = () => {
    return (
        <div className="section">
            <img src="/img/post01.jpg" alt="" />
            <Counter />

            <Posts/>

            <Ebook/>
        </div>
    )
}
