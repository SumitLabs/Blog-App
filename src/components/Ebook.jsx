import './ebook.css'
import cover_img from '/img/post01.jpg'
import { Book } from './Book'
export const Ebook = () => {
    const e_book = [
        {
            'id': '1',
            'cover': cover_img,
            'title': 'MADHYA PRADESH e-Magazine',
            'author': 'J martian',
            'date': 'Mar 22, 2023',
            'pdflink': '',

        },
        {
            'id': '2',
            'cover': cover_img,
            'title': 'The International Day of Yoga 2024 Handbook',
            'author': 'J martian',
            'date': 'Mar 22, 2023',
            'pdflink': '',

        },
        {
            'id': '3',
            'cover': cover_img,
            'title': 'DRDO@60 – 60 Years of Achievements',
            'author': 'J martian',
            'date': 'Mar 22, 2023',
            'pdflink': '',

        },
        {
            'id': '4',
            'cover': cover_img,
            'title': 'Innovate for Digital India Challenge 2.0 – Ten...',
            'author': 'J martian',
            'date': 'Mar 22, 2023',
            'pdflink': '',

        },
       


    ]
    return (
        <div className="ebook_section">
           
        <div className="ebooks">
            <div className="ebook_container">
                {
                    e_book.map(({ id, cover, title, author, date, pdflink }) => <Book key={id} cover={cover} title={title} author={author} date={date} pdflink={pdflink} />)
                }
            </div>
        </div>
        </div>
    )
}
