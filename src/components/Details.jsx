import React from "react";
import "./details.css";

const Details = () => {
  return (
    <>
      <section className="details">
        <h2>What to expect from the course</h2>

        <div className="list">
          <ul>
            <li>
              <i className="fa-solid fa-check"></i>Learn to manage your
              relationships
            </li>
            <li>
              <i className="fa-solid fa-check"></i>Better communication
            </li>
            <li>
              <i className="fa-solid fa-check"></i>Time management
            </li>
            <li>
              <i className="fa-solid fa-check"></i>Forgiveness
            </li>
          </ul>
        </div>

        <h3 style={{ paddingTop: "20px" }}>Kye topics covered</h3>
        <p style={{ paddingTop: "20px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
          possimus commodi veniam consectetur rem, eum quasi magni voluptates
          harum dignissimos sint, aperiam alias recusandae optio voluptatibus
          tempora numquam! In et corporis officia odio minus quibusdam saepe
          ullam, non repellendus. Porro.
        </p>

        <div className="list-item">
            <div className="item">
              <i className="fa-solid fa-check"></i>
                <p>
                <span>10 written and audio session</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                explicabo temporibus laboriosam eum, qui quod nemo neque itaque
                repudiandae sed.
                </p>
            </div>
            <div className="item">
              <i className="fa-solid fa-check"></i>
                <p>
                <span>intuitive exercise and homework</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                explicabo temporibus laboriosam eum, qui quod nemo neque itaque
                repudiandae sed.
                </p>
            </div>
            <div className="item">
              <i className="fa-solid fa-check"></i>
                <p>
                <span>A handy reference</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                explicabo temporibus laboriosam eum, qui quod nemo neque itaque
                repudiandae sed.
                </p>
            </div>
            <div className="item">
              <i className="fa-solid fa-check"></i>
                <p>
                <span>Expert technique</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                explicabo temporibus laboriosam eum, qui quod nemo neque itaque
                repudiandae sed.
                </p>
            </div>
       
        </div>
      </section>
    </>
  );
};

export default Details;
