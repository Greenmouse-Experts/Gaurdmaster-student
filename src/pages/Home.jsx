import React from 'react'
import "../Stylesheet/home.css"
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import our1 from "../assets/1.png";
import our2 from "../assets/2.png";
import our3 from "../assets/3.png";
import our4 from "../assets/4.png";
import our5 from "../assets/5.png";
import our6 from "../assets/6.png";
import our7 from "../assets/7.png";
import our8 from "../assets/8.png";
import our9 from "../assets/9.png";
import our10 from "../assets/10.png";
import our11 from "../assets/11.png";
import our12 from "../assets/12.png";
import our13 from "../assets/13.png";
import our14 from "../assets/14.png";
import our15 from "../assets/15.png";
import our16 from "../assets/16.png";
import { SliderProps } from "../Components/SliderProps"
import svg from "../assets/svg.svg"
import svg1 from "../assets/svg1.svg"
import svg2 from "../assets/svg2.svg"
import sv from "../assets/sv.svg"
import Footer from "../Components/Footer"
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { FiHeart, FiUser } from "react-icons/fi";

const Home = () => {
  const numData = [
    {
      icon: sv,
      num: 1230,
      head: "Students Worldwide",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ",
    },
    {
      icon: svg,
      num: 960,
      head: "Courses & Programs",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ",
    },
    {
      icon: svg1,
      num: 650,
      head: "TOTAL ENROLLED",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ",
    },
    {
      icon: svg2,
      num: 5950,
      head: "Tutors",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ",
    },
  ];

  const data = [
    {
      id: 1,
      head: "Private Security Business Mgmt",
      image: our3,
      body: "Enhance skills in private security business management.",
      span: "Mini MBA",
    },
    {
      id: 2,
      head: "Loss Prevention Operations & Leadership Studies",
      image: our5,
      body: "Integrating loss prevention and leadership studies principles.",
      span: "PPD Programs",
    },
    {
      id: 3 ,
      head: "Asset Protection Studies",
      image: our6,
      body: "Enhances your financial security and risk management",
      span: "PPD Programs",
    },
    {
      id: 4,
      head: "IFPO Certified Protection Officers Course",
      image: our15,
      body: "Enhance your professional security skills comprehensively",
      span: "PCP Programs",
    },
    {
      id: 5,
      head: "Event Security & Crowd Management",
      image: our9,
      body: "Comprehensive training in event security and crowd management.",
      span: "PPC Programs",
    },
    {
      id: 6,
      head: "Commercial & Retail Crime Prevention",
      image: our10,
      body: "Enhance security skills with our Crime Prevention Course.",
      span: "PPC Programs",
    },
  ]

  const top = [
    {
      id: 1,
      head: "Ontario Security Guard Basic Course",
      image: our13,
      body: "Essential training on foundational skills for guard responsibilities.",
      span: "PCP Program",
    },
    {
      id: 2,
      head: "Alberta Security Guard Training Course",
      image: our14,
      body: "Comprehensive security guard course for professional skill development.",
      span: "PCP Program",
    },
    {
      id: 3,
      head: "Private Security Business Mgmt",
      image: our3,
      body: "Enhance skills in private security business management.",
      span: "Mini MBA",
    },
    {
      id: 4,
      head: "Private Security Operations & Leadership Studies",
      image: our7,
      body: "Integrating private security operations and leadership studies.",
      span: "PPC Programs",
    },
    {
      id: 5,
      head: "Security Planning, Assessment & Audit",
      image: our8,
      body: "Comprehensive course integrating security planning & methodologies.",
      span: "PPC Programs",
    },
    {
      id: 6,
      head: "Private Security Studies",
      image: our12,
      body: "Explore advanced strategies for safeguarding organizations.",
      span: "PCP Program",
    },
  ]



  return (
    <div className="home_main">
        <div className="home">
            <div className="home_text">
                 <h2 className="h2">Your Gateway to Knowledge <br /> and Excellence!</h2>
            <p>Find your course and start learning</p>
            <div className="search">
              <input type="text" placeholder="Search for anything" />
              <FiSearch />
            </div>
            </div>
           
        </div>
        <SliderProps head="Trending Courses" data={data}/>
        <div className="num">
        {numData.map((item) => (
          <div className="num_div">
            <h2><img src={item.icon} alt="" />{item.num}</h2>
            <h3>{item.head}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <div className="course_main top">
        <div className="our_head">
          <span>CHOOSE YOUR DESIRED COURSES</span>
          <h2 className="h2">
          Browse Our Top Courses

          </h2>
          <div className="top_link">
            <Link>Best Selling</Link>
            <Link>Mini Mba</Link>
            <Link>PPD Programs</Link>
          </div>
        </div>
        <div  className="top_grid">
            {top.map((item, index) => (
              <div key={index} className="slide_card">
                <img src={item.image} alt="" />
                <div className="content">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_802_332)">
                        <path
                          d="M8.70644 1.45909L16.6752 4.82368C16.7717 4.86404 16.8541 4.93205 16.9121 5.01914C16.9701 5.10623 17.001 5.20851 17.001 5.31313C17.001 5.41776 16.9701 5.52004 16.9121 5.60713C16.8541 5.69422 16.7717 5.76223 16.6752 5.80259L13.4579 7.15976V10.6249C13.4579 10.7227 13.431 10.8185 13.38 10.9019C13.3002 11.0255 13.2064 11.14 13.1016 11.2433C12.9253 11.4246 12.6589 11.6541 12.2779 11.878C11.5129 12.3299 10.3115 12.7492 8.4996 12.7492C8.02289 12.7492 7.58869 12.7202 7.19202 12.6692C7.05556 12.6474 6.93295 12.5734 6.85018 12.4627C6.76742 12.3521 6.73103 12.2136 6.74872 12.0765C6.76642 11.9395 6.83681 11.8147 6.94496 11.7287C7.05311 11.6427 7.19052 11.6023 7.32802 11.6159C7.67652 11.6605 8.0661 11.6867 8.4996 11.6867C10.1408 11.6867 11.153 11.3092 11.7381 10.9635C11.9577 10.8374 12.1603 10.6823 12.3395 10.5031L12.3954 10.4429V7.60743L8.70644 9.16576C8.64099 9.19342 8.57066 9.20768 8.4996 9.20768C8.42855 9.20768 8.35822 9.19342 8.29277 9.16576L4.07252 7.38359V9.62901C4.4281 9.72038 4.75252 9.90597 5.01248 10.1659C5.4226 10.5753 5.66627 11.1647 5.66627 11.8858V15.0733C5.66589 15.1625 5.64336 15.2502 5.60071 15.3286C5.55806 15.407 5.49662 15.4736 5.4219 15.5223C5.37389 15.5527 5.32423 15.5804 5.27314 15.6052C5.15413 15.6643 5.03104 15.7147 4.90481 15.7561C4.46409 15.8964 4.00376 15.9653 3.54127 15.9601C3.07876 15.9656 2.61837 15.8967 2.17773 15.7561C2.05162 15.7144 1.92855 15.6639 1.80939 15.6052C1.75548 15.5796 1.7034 15.5502 1.65356 15.5174C1.58097 15.4686 1.5214 15.4029 1.48004 15.3258C1.43868 15.2488 1.41679 15.1628 1.41627 15.0754V11.8879C1.41627 11.1654 1.65994 10.5775 2.07006 10.1666C2.32991 9.90721 2.65446 9.72207 3.01002 9.63043V6.93663L0.32402 5.80118C0.228188 5.76035 0.146472 5.69226 0.0890357 5.60536C0.0315992 5.51846 0.000976563 5.41659 0.000976562 5.31243C0.000976562 5.20826 0.0315992 5.10639 0.0890357 5.0195C0.146472 4.9326 0.228188 4.8645 0.32402 4.82368L8.29277 1.45909C8.35822 1.43143 8.42855 1.41718 8.4996 1.41718C8.57066 1.41718 8.64099 1.43143 8.70644 1.45909ZM8.4996 8.10043L15.1027 5.31243L8.4996 2.52443L1.89652 5.31243L8.4996 8.10043ZM3.54127 10.6249C3.27423 10.6249 3.01356 10.7248 2.82089 10.9175C2.63319 11.1052 2.47877 11.4133 2.47877 11.8865V14.7354C2.69056 14.8098 3.04331 14.8969 3.54127 14.8969C4.03923 14.8969 4.39198 14.8098 4.60377 14.7354V11.8858C4.60377 11.4119 4.44935 11.1045 4.26164 10.9168C4.16663 10.8232 4.0541 10.7492 3.9305 10.6992C3.80689 10.6491 3.67463 10.6239 3.54127 10.6249Z"
                          fill="#0D0D0D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_802_332">
                          <rect width="17" height="17" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {item.span}
                  </span>
                  <h3>{item.head}</h3>
                  <p>{item.body}</p>

                  <div className="enrol">
                    <p><b>Free</b></p>
                    <Link to="#">
                    Go to Lesson
                    {/* <RiArrowRightLine /> */}
                  </Link>
                  </div>
                  
                </div>
              </div>
            ))}
        </div>
      </div>
      
      <Footer/>
      
    </div>
  )
}

export default Home