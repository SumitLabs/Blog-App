import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
export const Footer = () => {
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    let showYear = () => {
        let year = new Date();
        let yy = year.getFullYear();
        return (yy)
    }
    return (
        <footer>
            <div className="go-back">
                <Link to='' onClick={goToBtn}>Back to top</Link>
            </div>
            <ul className="footer_categories">
                <li><Link to='/posts'>Business</Link></li>
                <li><Link to='/posts'>Food</Link></li>
                <li><Link to='/posts'>Education</Link></li>
                <li><Link to='/posts'>Entertainment</Link></li>
                <li><Link to='/posts'>Uncategorized</Link></li>
            </ul>
            <hr />
            <div className="feedback">
                <h2>Let me know what's on your mind</h2>
                <form action="" method=''>
                    <label htmlFor="name" >Name <span>*</span></label>
                    <input type="text" name='name' autoComplete='off' required />
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="email" name='email' autoComplete='off' required/>
                    <label htmlFor="message">Leave us a message <span>*</span></label>
                    <input type="textarea" name='message' autoComplete='off' required/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="copy_right">
                <p>All Right reserved by &copy; Blog {showYear()}</p>
            </div>
        </footer>
    )
}
