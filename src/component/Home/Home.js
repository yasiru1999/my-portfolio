import React from "react";
import './Home.css'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import homepic from "../../pic/3.png"

const Home = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const words = [" Undergraduate", " Full-Stack developer", " Blogger", " Tech Enthusiast", " Self Learner"];
    const { text } = useTypewriter({
        words,
        cursorStyle:'_',
        typeSpeed:70,
        deleteSpeed:50,
        delaySpeed:1000,
        loop: 0,
    });

    return(
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>WELCOME TO MY PORTFOLIO</h3>
                        <h1>
                            Hi, I'm <span>Yasiru Navoda</span>
                        </h1>
                        <h2>
                            a
                            <span>
                                {text}
                            </span>
                        </h2>
                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND WITH ME</h4>
                                <div className="button">
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
                            <div className='col_1'>
                                <h4>View My Resume</h4>
                                    <button
                                        className='btn_shadow'
                                        onClick={() => openInNewTab('https://drive.google.com/file/d/1lwHq_02VSX_aoMjI4lAOCVjAMB5dfjtB/view?usp=sharing')}
                                    >
                                        Resume
                                    </button>

                            </div>
                        </div>
                        <p>I am an Undergraduate with a great passion for software development who is
                            hardworking and enthusiastic. Currently in my third year of studying software
                            engineering at SriLanka Institute of Information Technology. I have a strong
                            ability to learn new programming languages and adapt to new technologies.
                            My objective is to work for an organization which provide the opportunity to
                            improve my knowledge, skills and gain more experience while growing along with
                            the organizational objectives and taking the organization to excellence
                        </p>
                    </div>

                    <div className="right">
                        <div className="right_img">
                            <img src={homepic} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Home;