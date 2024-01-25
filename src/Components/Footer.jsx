import React from 'react'
import '../Stylesheet/navbar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
    return (
        <footer >
        {/* <div className="red"><img onClick={scrollToTop}  src={scroll} alt="" /></div> */}
        <div className="footer">
            <div className="foot_head">
                <div></div>
            {/* <img src={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706009737/GuardMaster/Guardmaster_transparent1_1_1_wzdsac.png'} alt="img" /> */}
            <div className="email">
            
                <div className="send">
                    <input type="email" name="suscribe" id="" placeholder='Your Email'/>
                    <button>Send</button>
                </div>
            </div>
    
             </div>
             
            <div className="foot_body">
                <div className="a">
                    <h3 className='text-[18px] font-semibold'>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/course" >Courses</Link>
                    <Link to="/faq">FAQs</Link>
                </div>
                <div className="a">
                <h3 className='text-[18px] font-semibold'>Courses</h3>
                   <p><HashLink to={'/course#courses'}>Corporate Security Mgmt</HashLink></p>
                    <p><HashLink to={'/course#courses'}>Loss Prevention Mgmt</HashLink></p>
                    <p><HashLink to={'/course#courses'}>Private Security Business Mgmt</HashLink></p>
                    <p><HashLink to={'/course#courses'}>Business Resilience</HashLink></p>
                </div>
                <div className="a">
                <h3 className='text-[18px] font-semibold'>Company Details</h3>
                    <p>+1 905 452 2470</p>
                    <p>info@guardmasterinstitute.ca</p>
                    <p>www.guardmasterinstitute.ca</p>
                    <p className='lg:mb-5'></p>
                </div>
                <div className="a">
                <h3 className='text-[18px] font-semibold'>Our Programs</h3>
                    <HashLink to={'/course#courses'}>Mini-MBA Programs</HashLink>
                    <HashLink to={'/course#diploma'}>Professional Proficiency Programs</HashLink>
                    <HashLink to={'/course#ppcp'}>Professional Certification Programs</HashLink>
                    <HashLink to={'/course#plpcp'}>Provincial Licensing and Micro Credential Programs</HashLink>
                </div>
               
                
            </div>
            <div className="c_tag">
                <p>Copyright © 2024 Guardmaster Institute. All rights reserved </p>
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


