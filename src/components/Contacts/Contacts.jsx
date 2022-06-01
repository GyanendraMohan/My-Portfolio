import React from 'react'
import './Contacts.css'
import Phone from "./../../img/phone.png"
import Email from "./../../img/email.png"
import Address from "./../../img/address.png"
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contacts = () => {
    const formRef = useRef()

    const handelSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_wo75zye',
            'template_us6kbho',
            formRef.current,
            'bgsnQMBRQvgM0mE-4'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 7081526590
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
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along me. <br /> <b>Have Fun!</b>
                    </p>
                    <form ref={formRef} onSubmit={handelSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts