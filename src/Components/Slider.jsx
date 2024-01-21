import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay } from "react-icons/fa";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";

const data = [
  {
    id: 1,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia leo eget turpis pretium elementum.",
    course: "Introduction to Security Management and Services-2024",
    name: "Victor",
    lname: "Dwae",
  },
  {
    id: 2,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia leo eget turpis pretium elementum.",
    course: "Introduction to Security Management and Services-2024",
    name: "Chloe",
    lname: "Bailey",
  },
  {
    id: 3,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia leo eget turpis pretium elementum.",
    course: "Introduction to Security Management and Services-2024",
    name: "Layi",
    lname: "Wasabi",
  },
  {
    id: 4,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia leo eget turpis pretium elementum.",
    course: "Introduction to Security Management and Services-2024",
    name: "Jason",
    lname: "Freeman",
  },
];

export default class Sliders extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3.3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <h2 className="h2">
          Our Students Attest to our Claims{" "}
          <div>
            <span className="button" onClick={this.previous}>
              <RiArrowLeftLine />
            </span>
            <span className="button" onClick={this.next}>
              <RiArrowRightLine />
            </span>
          </div>
        </h2>
        <Slider
          className="slider_div"
          ref={(c) => (this.slider = c)}
          {...settings}
        >
          {data.map((item) => (
            <div className="slider_box" key={item.id}>
              <span>“</span>
              <p>{item.body}</p>
              <h3>
                <span className="initial">
                  {item.name.charAt(0)}
                  {item.lname.charAt(0)}
                </span>{" "}
                {item.name} {item.lname}
              </h3>

              <div>
                <span>
                  <FaPlay />
                </span>{" "}
                <p>{item.course}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
