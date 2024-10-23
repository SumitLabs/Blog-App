import { useState } from 'react'
import img from '/img/post01.jpg'
import avatar from '/img/avatar.jpg'
import { PostItem } from './PostItem'
import './posts.css'
export const Posts = () => {
    const t_posts = [
        {
            id: '1',
            thumbnail: img,
            categrory: 'sci',
            title: 'This is the title of the post 1',
            desc: 'This is the desc This is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the desc ',
            author: 'J martian',
            date: 'Mar 22, 2023',
            page_link:'/articles/article',
            facebook_link:'',
            linkdin_link:'',
            more_link:'',
            x_link:'',
            profile_img: avatar,
            profile_link:'',
        },
        {
            id: '2',
            thumbnail: img,
            categrory: 'sci',
            title: 'This is the title of the post 2',
            desc: 'This is the desc This is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the desc ',
            author: 'J martian',
            date: 'Mar 22, 2023',
            page_link: '/articles/article',
            facebook_link:'',
            linkdin_link:'',
            more_link:'',
            x_link:'',
            profile_img: avatar,
             profile_link:'',
        },
        {
            id: '3',
            thumbnail: img,
            categrory: 'sci',
            title: 'This is the title of the post 3',
            desc: 'This is the desc This is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the desc ',
            author: 'J martian',
            date: 'Mar 22, 2023',
            page_link: '/articles/article',
            facebook_link:'',
            linkdin_link:'',
            more_link:'',
            x_link:'',
            profile_img: avatar,
             profile_link:'',
        },
        {
            id: '4',
            thumbnail: img,
            categrory: 'entertanment',
            title: 'This is the title of the post 4 ',
            desc: 'This is the desc This is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the desc ',
            author: 'J martian',
            date: 'Mar 22, 2023',
            page_link: '/article',
            facebook_link:'',
            linkdin_link:'',
            more_link:'',
            x_link:'',
            profile_img: avatar,
             profile_link:'',
        },
        {
            id: '5',
            thumbnail: img,
            categrory: 'sci',
            title: 'This is the title of the post 5 ',
            desc: 'This is the desc This is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the desc ',
            author: 'J martian',
            date: 'Mar 22, 2023',
            page_link: '/article',
            facebook_link:'',
            linkdin_link:'',
            more_link:'',
            x_link:'',
            profile_img: avatar,
             profile_link:'',
        },
        {
            id: '6',
            thumbnail: img,
            categrory: 'sci',
            title: 'This is the title of the post 6 ',
            desc: 'This is the desc This is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the descThis is the desc ',
            author: 'J martian',
            date: 'Mar 22, 2023',
            page_link: '/page_link',
            facebook_link:'',
            linkdin_link:'',
            more_link:'',
            x_link:'',
            profile_img: avatar,
             profile_link:'',
        },
    ]
    const [posts, setPost] = useState(t_posts)
    return (
        <div className='posts-section'>
       
            <div className="posts">

                {
                    posts.map(({ id, thumbnail, categrory, title, desc, author, date, page_link ,facebook_link,linkdin_link,x_link,more_link,profile_img,profile_link}) => <PostItem key={id} thumbnail={thumbnail} categrory={categrory} title={title} desc={desc} author={author} date={date} page_link={page_link} facebook_link={facebook_link} linkdin_link={linkdin_link} x_link={x_link} more_link={more_link} profile_img={profile_img} profile_link={profile_link}/>)
                }

            </div>
        </div>
    )
}
