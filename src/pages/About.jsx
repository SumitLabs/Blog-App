import { Link } from 'react-router-dom';
import './about.css'
import { IoMdPin } from "react-icons/io";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
export const About = () => {
  return (
    <div className="about">

      <div className="about_container">

        <div className="overview">
          <p>The citizen-centric platform empowers people to connect with the Government & contribute towards good governance.

            MyGov has been established as Government of India’s Citizen Engagement Platform which collaborates with multiple Government bodies/ Ministries to engage with citizens for policy formulation and seeks the opinion of people on issues/ topics of public interest and welfare.

            Since its launch on 26th July 2014, MyGov has more than 30.0 million registered users. Almost all Government Departments leverage MyGov platform for their citizen engagement activities, consultations for policy formulation and also to disseminate information to citizens for various Government schemes and programs. MyGov is amongst the most active profiles on Social Media – Twitter, Facebook, Instagram, YouTube & LinkedIn with the username @MyGovIndia. MyGov has a significant presence on several Indian social media platforms like Koo, Sharechat, Chingari, Roposo, Bolo Indya and Mitron. MyGov has adopted multiple engagement methodologies like discussions, tasks, polls, surveys, blogs, talks, pledges, quizzes and on-ground activities by innovatively using internet, mobile apps, IVRS, SMS and outbound dialling (OBD) technologies.

            MyGov has also launched State instances in 23 States, namely Himachal Pradesh, Haryana, Maharashtra, Madhya Pradesh, Arunachal Pradesh, Assam, Manipur, Tripura, Chhattisgarh, Jharkhand, Nagaland, Uttarakhand, Goa, Tamil Nadu, Uttar Pradesh, Jammu & Kashmir, karnataka, Gujarat, Dadra and Nagar Haveli & Daman and Diu, Mizoram, Rajasthan, Ladakh and Andaman & Nicobar Islands.</p>
        </div>
        <div className="ceo_info">
          <table>
            <thead className='table_header'>
              <tr className='table_row'>
                <th>Designation</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr className='table_row'>
                <td>Grievance Officer</td>
                <td>NK. Nidua	</td>
                <td>nidua@gmail.com</td>
              </tr>
              <tr className='table_row'>
                <td>Grievance Officer</td>
                <td>NK. Nidua	</td>
                <td>nidua@gmail.com</td>
              </tr>
              <tr className='table_row'>
                <td>Grievance Officer</td>
                <td>NK. Nidua	</td>
                <td>nidua@gmail.com</td>
              </tr>
              <tr className='table_row'>
                <td>Grievance Officer</td>
                <td>NK. Nidua	</td>
                <td>nidua@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      {/* <div className="address_socialLinks">
        <div className="address_socialLinks_container_left">
          <h4>Address for Communications</h4>
          <div className="address">
            <IoMdPin className="address-icon" />
            <p>MyGov, Digital India Corporation, Room 3015, Electronics Niketan 6 CGO Complex, Lodhi Road, New Delhi 110003</p>
          </div>
        </div>
        <div className="address_socialLinks_container_right social_icon">
          <Link to=''><FaInstagram className='instagram' /></Link>
          <Link to=''><FaXTwitter className='x' /></Link>
          <Link to=''><FaFacebookF className='facebook' /></Link>
        </div>
      </div> */}

    </div>
  )
}