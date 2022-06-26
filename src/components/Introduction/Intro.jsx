import React from 'react'
import "./Intro.css"
import Profile from "../../img/Profile.png"

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
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Gamer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I am a Software Development Engineer Intern at HashedIn By Deloitte. I have done bTech
                        from UPES Dehradun, Uttarakhand India. I am From
                        Varanasi, the oldest living city.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg">
                    <img src={Profile} className="i-img" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Intro;