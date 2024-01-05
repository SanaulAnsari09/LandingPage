import React from "react";
import "./About.css";

const About = ({details, setDetails}) => {

  return (
    <>
      <nav>
        <ul>
          <li>ABOUT</li>
          <li>INSTRUCTOR</li>
          <li>REVIEW</li>
        </ul>
      </nav>

      <section className="about">
        <div className="info">
            <h2>About the course</h2>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore
            dolorem debitis veniam amet atque voluptatibus quo aut sequi sit a
            illum enim tenetur rerum libero aliquam, et odit nihil illo unde eius.
            Iure voluptas accusantium molestias mollitia aliquam dolorem hic
            dolorum. Ea ad sapiente dicta ullam repellat, ipsum asperiores
            </p>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore
            dolorem debitis veniam amet atque voluptatibus quo aut sequi sit a
            illum enim tenetur rerum libero aliquam, et odit nihil illo unde eius.
            Iure voluptas accusantium molestias 
            </p>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore
            dolorem debitis veniam amet atque voluptatibus quo aut sequi sit a
            illum enim tenetur rerum libero aliquam
            </p>
        </div>
        {details !== '' ? <div className="card">
            <h4>Course Fee</h4>
            <h1><span>₹</span>{details.data[0].course.fee.amount}</h1>
            <h4 style={{paddingTop:'15px'}}>What's included</h4>
            <p style={{paddingTop:'10px'}}><i className="fa-solid fa-video"></i>On demand video</p>
            <p><i className="fa-solid fa-film"></i>Live stream video</p>
            <p><i className="fa-solid fa-bookmark"></i>Live 05 session with nityanand charan das</p>
            <p><i className="fa-brands fa-slack"></i>An active community on whatsapp</p>
            <button style={{marginTop:'20px'}}>Register Today</button>
        </div> : ''}
      </section>
    </>
  );
};

export default About;
