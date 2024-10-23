import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosShareAlt } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import './postItem.css'
export const PostItem = ({ postId, thumbnail, categrory, title, desc, author, date, page_link, x_link, facebook_link, linkdin_link, more_link, profile_img }) => {

    const [showModal, setModal] = useState(false);
    const closeModal = () => setModal(false)
    const Modal = () => {

        return <>
            <div className="modal_wrapper"></div>
            <div className="modal_container">
                <button onClick={closeModal} className='close'>X</button>
                <h2>Share Post</h2>
                <div className="share_on">
                    <Link to='' className='facebook_link'><FaFacebookF /></Link>
                    <Link to='' className='x_link'><FaXTwitter /></Link>
                    <Link to='' className='linkedin_link'><FaLinkedinIn /></Link>
                    <Link to='' className='more_link'><FaLink /></Link>
                </div>
            </div>
        </>
    }

    const shortDesc = desc.length > 145 ? desc.substr(0, 145) + '...' : desc;
    const shortTitle = title.length > 40 ? title.substr(0, 40) + '...' : title;

    return (
        <div className="card">
            <div className="img">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="author">
                <div className="left_author_area">
                    <div className="left_inter_area">
                        <div className="profile_img">
                            <Link to='/profile'><img src={profile_img} alt="" /></Link>
                        </div>
                        <div className="profile_name">
                            <p className='author'>{author}</p>
                            <p className='categrory'>{categrory}</p>
                        </div>

                    </div>
                    <div className="right_inter_area">
                        <p className='date'>{date}</p>
                    </div>
                </div>
                <IoIosShareAlt className='right_author_area' onClick={() => { setModal(true) }} />
                {showModal && <Modal closeModal={closeModal} />}
            </div>
            <div className="title">
                <h3><Link to='/articles/article'>{shortTitle}</Link></h3>
            </div>
            <div className="descreption">
                <p>{shortDesc}</p>
            </div>
        </div>
    )
}






