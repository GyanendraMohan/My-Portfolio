import React from 'react'
import './Contacts.css'
import Phone from "./../../img/phone.png"
import Email from "./../../img/email.png"
import Address from "./../../img/address.png"
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'



const Contacts = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)



    const handelSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_wo75zye',
            'template_us6kbho',
            formRef.current,
            'bgsnQMBRQvgM0mE-4'
        )
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's Collaborate</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 8696593466
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            gmpatel152@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Shahpur, Badagaon, Varanasi, Uttar Pradesh, India, Pin-Code : 221204
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Interested in research internships, industry-aligned research roles, and collaborations?</b>
                        <br />
                        Reach out to discuss Wireless sensing, Applied ML, and Smart environments.
                    </p>
                    <form ref={formRef} onSubmit={handelSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Send Message</button>
                        {done && <span style={{ color: "var(--primary-color)", marginTop: "10px", display: "block" }}>Thank you for reaching out!</span>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts