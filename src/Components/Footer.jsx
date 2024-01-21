import React from 'react'
import Logo from "../assets/wlogo.png"
import '../Stylesheet/navbar.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer >
    {/* <div className="red"><img onClick={scrollToTop}  src={scroll} alt="" /></div> */}
    <div className="footer">
        <div className="foot_head">
        <img src={Logo} alt="" />
        <div className="email">
        
            <div className="send">
                <input type="email" name="suscribe" id="" placeholder='Your Email'/>
                <button>Send</button>
            </div>
        </div>

         </div>
         
        <div className="foot_body">
            <div className="a">
                <h3>Quick Links</h3>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/course" >Courses</Link>
                <Link to="/bemember">Become a Member</Link>
            </div>
            <div className="a">
            <h3>Legal</h3>
               <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>License</p>
                <p>Certifications</p>
            </div>
            <div className="a">
            <h3>Company Details</h3>
               <p>No 8 Company address. Nigeria..</p>
                <p>+1 905 452 2470</p>
                <p>info@guardmasterinstitute.ca</p>
                <p>www.guardmasterinstitute.ca</p>
            </div>
            <div className="a">
            <h3>Our Programs</h3>
                <Link >Mini-MBA Programs</Link>
                <Link >Professional Proficiency Programs</Link>
                <Link >Professional Certification Programs</Link>
                <Link>Provincial Licensing and Micro Credential Programs</Link>
            </div>
           
            
        </div>
        <div className="c_tag">
            <p>© Copyright 2023 Guardmaster Institute.</p>
            <div>
                <Link>Terms & Conditions</Link>
                <Link>Privacy Policy</Link>
                <Link>Support</Link>
            </div>
        </div>
    </div>
    
</footer>
  )
}

export default Footer


