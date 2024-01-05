import React from "react";
import "./instructor.css";

const Instructor = () => {
  return (
    <>
    <h2 style={{padding:'50px 0 10px 0'}}>About Instructor</h2>

      <section className="instructor">

        <div className="profile">
          <img src="profile.jpg" alt="profile" />
        </div>
        <div className="first">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor eius
            animi alias pariatur, impedit, voluptate esse inventore ducimus
            repellendus ipsam harum, atque tenetur? Molestias ex recusandae
            facilis deleniti ipsam optio.
          </p>
        </div>
        <div className="second">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae
            inventore, nostrum quos suscipit perspiciatis dolorem laboriosam et
            adipisci, culpa quo consectetur. Earum consectetur, corporis sit
            error facere doloribus ad saepe aperiam sunt iure quaerat accusamus
            iusto aliquid assumenda veritatis.
          </p>
        </div>
      </section>

      <section className="social-media">
            <div className="icons">
            <div>
                <i className="fa-brands fa-facebook"></i>
                <span>Facebook</span>
            </div>
            <div>
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
            </div>
            <div>
                <i className="fa-brands fa-x-twitter"></i>
                <span>Twitter</span>
            </div>
            <div>
                <i className="fa-brands fa-youtube"></i>
                <span> YouTube </span>
            </div>
            </div>
      </section>
    </>
  );
};

export default Instructor;
