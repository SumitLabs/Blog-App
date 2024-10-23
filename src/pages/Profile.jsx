import React, { useState } from 'react'
import './profile.css'
import Avatar from '/img/avatar.jpg'
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom'
const authorsData = [
  { id: 1, avatar: Avatar, name: "Jone Doe", posts: 1 },
  { id: 2, avatar: Avatar, name: "joker addo", posts: 4 },
  { id: 3, avatar: Avatar, name: "Hajia Bintu", posts: 2 },
  { id: 4, avatar: Avatar, name: "Bintu", posts: 2 },
  { id: 4, avatar: Avatar, name: "Bintu", posts: 2 },
  { id: 4, avatar: Avatar, name: "Bintu", posts: 2 },
  { id: 4, avatar: Avatar, name: "Bintu", posts: 2 },
  { id: 4, avatar: Avatar, name: "Bintu", posts: 2 },
  { id: 4, avatar: Avatar, name: "Bintu", posts: 2 }
]
export const Profile = () => {
  const [authors, setAuthors] = useState(authorsData)

  const [addAuthor, setAddAuthor] = useState(false);
  const closeAuthor = () => setAddAuthor(false)


  let Author = () => {
    return <>
      <div className="modal_wrapper "></div>
      <div className="modal_container modal_width">
        <button onClick={closeAuthor} className='close'>X</button>
        <div className="add_auther">
          <Link to='' >My Posts</Link>
          <div className="profile_avatar">
            <img src={Avatar} alt="" />
          </div>
            
          <form action="" className="add_auther_form">
            <input type="file" name="avatar" id="avatar" accept='png,jpg,jpeg ' autoComplete='OFF'/>
            <label htmlFor="avatar" className='pick_avatar'><FaEdit className='pick_avatar_icon'/></label>
            <input type="text" name="username" id="username" placeholder='Username' autoComplete='OFF'/>
            <input type="email" name="email" id="email" placeholder='Email' autoComplete='OFF'/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  }

  return (
    <div className="profile">
      <div className="profile_container">
        <div className="profiles">
          <button onClick={() => setAddAuthor(true)}>ADD AUTHOR</button>
          {addAuthor && <Author closeAuthor={closeAuthor} />}
        </div>

        <div className="profile_details">
          {
            authors.map(({ id, avatar, name, posts }) => {
              return <Link to='' className='profile_detail'>
                <img src={avatar} alt="" width={40} />
                <div className="profile_info">
                  <h3>{name}</h3>
                  <p>{posts} Posts</p>
                </div>
              </Link>
            })
          }

        </div>
      </div>
    </div>
  )
}
