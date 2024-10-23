import './counter.css'
import { TfiWrite } from 'react-icons/tfi';
import {MdOutlineScreenSearchDesktop} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
export const Counter = () => {
    return (
        <div className="counter">
            <div className="total_post">
                <div className="counter_icon"><span></span><TfiWrite/></div>
                <div className="counter_data">
                    <div className="count">5</div>
                    <div className="counter_title">Posts</div>
                </div>
            </div>
            <div className="total_visiter">
                <div className="counter_icon"><span></span><MdOutlineScreenSearchDesktop/></div>
                <div className="counter_data">
                    <div className="count">35K</div>
                    <div className="counter_title">Visitors</div>
                </div>
            </div>
            <div className="total_members">
                <div className="counter_icon"><span></span><AiOutlineUser/></div>
                <div className="counter_data">
                    <div className="count">2</div>
                    <div className="counter_title">Editors</div>
                </div>
            </div>
        </div>
    )
}
