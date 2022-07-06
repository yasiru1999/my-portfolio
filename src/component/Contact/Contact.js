import React, {useRef, useState} from "react";
import "./Contact.css"
import emailjs from "emailjs-com"
import ContactImage from "../../pic/contact.png"

const Contact = () => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const form = useRef();
    const [done, setDone] = useState(false)

    const formSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_dx8l2r4', form.current, 'TKRA7l4S6PnJkDId0')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return(
        <div>
            <section className="Contact" id="contact">
                <div className="container top">
                    <div className="heading text-center">
                        <h4>CONTACT</h4>
                        <h1>Contact With Me</h1>
                    </div>
                    <div className="content d_flex">
                        <div className="left">
                            <div className="box box_shadow">
                                <div className="details">
                                    <h1>Yasiru Navoda Jayasekara</h1>
                                    <br />
                                    <p>Address: 30/3,
                                        Well Road, Pallimulla,
                                        Matara, 81000, SriLanka.
                                    </p>
                                    <p>Phone: +94 770377445</p>
                                    <p>Email: <a>yasirunavoda518@gmail.com</a></p> <br />
                                    <span>FIND WITH ME</span>
                                    <div className='button f_flex'>
                                        <button
                                            className='btn_shadow'
                                            onClick={() => openInNewTab('https://www.linkedin.com/in/yasiru-navoda/')}
                                        >
                                            <i className='fab fa-linkedin-in'/>
                                        </button>
                                        <button
                                            className='btn_shadow'
                                            onClick={() => openInNewTab('https://github.com/yasiru1999')}
                                        >
                                            <i className='fab fa-github'/>
                                        </button>
                                        <button
                                            className='btn_shadow'
                                            onClick={() => openInNewTab('https://medium.com/@yasirunavoda')}
                                        >
                                            <i className='fab fa-medium'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Contact Me Form*/}
                        <div className='right box_shadow'>
                            <form ref={form} onSubmit={formSubmit}>
                                <div className='f_flex'>
                                    <div className='input row'>
                                        <span>YOUR NAME</span>
                                        <input type='text' name='from_name'/>
                                    </div>
                                    <div className='input row'>
                                        <span>PHONE NUMBER </span>
                                        <input type='number' name='from_number'/>
                                    </div>
                                </div>
                                <div className='input'>
                                    <span>EMAIL </span>
                                    <input type='email' name='from_email'/>
                                </div>
                                <div className='input'>
                                    <span>SUBJECT </span>
                                    <input type='text' name='from_subject'/>
                                </div>
                                <div className='input'>
                                    <span>YOUR MESSAGE </span>
                                    <textarea cols='30' rows='10' name='message'/>
                                </div>
                                <button className='btn_shadow'>
                                    SEND MESSAGE <i className='fa fa-long-arrow-right'/>
                                </button>
                                <br />
                                {done && "Thank you..."}
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )

}
export default Contact;