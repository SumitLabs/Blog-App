import React from 'react'
import './book.css'
import { NavLink } from 'react-router-dom'
export const Book = ({ id, cover, title, author, date, pdflink }) => {

  return (
    <div className="book">
      <div className="book_cover">
        <div className="cover">
          <img src={cover} alt="cover" height={200} width={100} />
        </div>
        <div className="book_title">
          <h3>{title}</h3>
        </div>
        <div className="desc">
          <div className="author">{author}</div>
          <div className="date">{date}</div>
        </div>
        <div className="ebook_btn">
          <NavLink to=''>Download</NavLink>
        </div>
      </div>
    </div>
  )
}
