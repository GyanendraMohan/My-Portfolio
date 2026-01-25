import React from 'react'
import "./Intro.css"
import Resume from "./../../img/resume.pdf"

import Github from "./../../img/github.png"
import LinkedIn from "./../../img/linkedin.png"
import Instagram from "./../../img/instagram.png"
import fb1 from "./../../img/fb1.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>
                        Hello, My name is
                    </h2>
                    <h1 className='i-name'>
                        Patel, Gyanendra
                    </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Applied Researcher</div>
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Data Analyst</div>
                        </div>
                    </div>

                    <div className="i-desc">
                        <b>Software Engineer & Applied Researcher | M.Tech Student at NIT Jalandhar in Data Analytics.</b>
                        <br />
                        Building data-driven systems and conducting applied research in Wi-Fi–based Human Activity Recognition (HAR) using CSI and machine learning.
                    </div>

                    <a href={Resume} download style={{ marginTop: "5px" }}>
                        <button className="resume-btn">Download CV</button>
                    </a>
                    <div className="i-icons">
                        <a href='https://github.com/GyanendraMohan' target='_blank' rel="noreferrer">
                            <img src={Github} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/gyanendra-mohan-patel-599a491b5/" target='_blank' rel="noreferrer">
                            <img src={LinkedIn} alt="" />
                        </a>
                        <a href="https://www.instagram.com/gyanendra_mohan/" target='_blank' rel="noreferrer">
                            <img src={Instagram} alt="" />
                        </a>
                        <a href="https://www.facebook.com/gyanendra.mohan.79/" target='_blank' rel="noreferrer">
                            <img src={fb1} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
            </div>
        </div>
    )
}

export default Intro;