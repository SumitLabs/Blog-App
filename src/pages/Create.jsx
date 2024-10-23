import React, { useState } from 'react'
import './create.css'
import { FaCloudUploadAlt } from "react-icons/fa";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
export const Create = () => {
  const currTime = new Date().toLocaleDateString;
  const currDate = new Date().toLocaleTimeString;

  const [blogs, setBlogs] = useState({
    title: '',
    category: '',
    content: '',
    thumbnail:'',
    time: currTime,
    date: currDate
  });



  return (
    <div className="create">
      <div className="create_container">
        <div className="editer_section">
          <form action="" method="post">
            <div className="uploadBanner ">
              <FaCloudUploadAlt className='uploadicon' />
              <input
                  type="file"
                  accept='.png, .jpg, .jpeg'
                  name='upload'
                  id='upload'
                />
              <label htmlFor="upload">
                Choose Files
              </label>

            </div>
            <div className="edit_section">
              <input type="text" name="title" id="title" placeholder='Blog Title' value={blogs.title}  onChange={(e)=>setBlogs({...blogs,title:e.target.value})}/>
              <input type="text" name="category" id="category" placeholder='Category' value={blogs.category} onChange={(e)=>setBlogs({...blogs,category:e.target.value})}/>
              <ReactQuill name="content"  id="content" value={blogs.content} onChange={(e)=>setBlogs({...blogs,category:e.target.value})}/>
              <input type="submit" value="Publish" id="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
