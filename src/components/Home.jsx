import React, { useState } from "react";
import './Home.css';
import Header from "./Header";
import About from "./About";
import Details from "./Details";
import Instructor from "./Instructor";
import Carousel from "./Carousel";
const Home = () =>{

    const [details, setDetails] = useState('');
    return( 
        <>
        <Header
            details = {details}
            setDetails = {setDetails}
        />
        <div className="homes">
            <About
            details={details}
            setDetails = {setDetails}
            />
            <Details/>
            <Instructor/>
            <Carousel/>
        </div>
        </>
    )
};
export default Home;


