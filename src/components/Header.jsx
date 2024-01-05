import React, { useEffect } from "react";
import "./header.css";
import axios from "axios";

const Header = ({ details, setDetails }) => {
  const fetchingDetails = async () => {
    try {
      let response = await axios.request("http://localhost:3000/posts");
      setDetails(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingDetails();
  }, []);

  return (
    <>
      {details !== "" ? (
        <div className="header">
          <div className="container">
            <div className="text">
              <p>{details.data[0].instructor.name}</p>
              <h1>{details.data[0].course.title}</h1>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
