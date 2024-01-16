import React from "react";
import "./Home.css";
import { FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';

const Home = () => {
    
    return (
        
        <section className="home"
             data-scroll-section
            data-scroll
            data-scroll-speed="6"
            id="home1"
        >
            <div className="home__container container">
                <p className="home__subtitle text-cs" data-scroll data-scroll-speed="9">
                    Hello <span>My Name Is</span>
                </p>
                <h1 className="home__title text-cs">
                    <span>KESHAV</span> <br />DAYAL
                </h1>

                <p className="home__job">
                    <span className="text-cs">I Am</span> <b> Web Developer</b>
                </p>

                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src="#" alt="" className="home__profile" />
                    </div>
                </div>
                <p className="home__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi labore dolorum beatae! Quas quod quasi, quia fugit praesentium aperiam velit?
                </p>

                <div className="home__socials">
                    <a href="./" className="home__social-link">
                        <FaTwitter />
                    </a>
                    <a href="./" className="home__social-link">
                        <FaDribbble />
                    </a>
                    <a href="./" className="home__social-link">
                        <FaBehance />
                    </a>
                </div>
                <div className="home__btns">
                    <a href=" " className="btn text-cs">
                        Download CV
                    </a>
                    <a href=" " className="hero__link text-cs">
                        My Skills
                    </a>
                </div>
            </div>
        </section>

        
    )
}


export default Home;