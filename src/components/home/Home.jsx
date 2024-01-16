import React from "react";
import "./Home.css";
import ProfileImg from "/Users/jarvis/Desktop/Porfolio/KESHAV'S portfolio/Portfolio/src/components/minion.png";
import { FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';
import { Helmet } from "react-helmet";

const Home = () => {
    
    return (
        
        <section className="home" id="home">
            <div className="home__container container">
                <p className="home__subtitle text-cs">
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
                        <img src={ProfileImg} alt="" className="home__profile" />
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
            <Helmet>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"
                    integrity="sha512-EZI2cBcGPnmR89wTgVnN3602Yyi7muWo8y1B3a8WmIv1J9tYG+udH4LvmYjLiGp37yHB7FfaPBo8ly178m9g4Q=="
                    crossorigin="anonymous" type="text/javascript" />

                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"
                    integrity="sha512-OzC82YiH3UmMMs6Ydd9f2i7mS+UFL5f977iIoJ6oy07AJT+ePds9QOEtqXztSH29Nzua59fYS36knmMcv79GOg=="
                    crossorigin="anonymous" />

                <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js" />
            </Helmet>
        </section>

        
    )
}


export default Home;