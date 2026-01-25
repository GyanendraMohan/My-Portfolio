import React from 'react'
import "./About.css"
import Award from "../../img/Award.png";
import MyPhoto from "../../img/MyPhoto.png";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={MyPhoto}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Currently pursuing <b>M.Tech from NIT Jalandhar</b> in Data Analytics.
                </p>
                <p className="a-desc">
                    I am a passionate Software Engineer with experience in building scalable web applications.
                    My expertise lies in Full Stack Development, and I am currently deepening my knowledge in Data Analytics
                    to solve complex data-driven problems.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">HashedIn By Deloitte - SDE</h4>
                        <p className="a-award-desc">
                            Working as an SDE, contributing to high-impact projects and delivering robust software solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About