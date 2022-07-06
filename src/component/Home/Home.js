import React from "react";
import './Home.css'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import homepic from "../../pic/3.png"

const Home = () => {
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
                        <h3>WELCOME TO MY WORLD</h3>
                        <h1>
                            Hi, I'm <span>Yasiru Navoda</span>
                        </h1>
                        <h2>
                            a
                            <span>
                                {text}
                            </span>
                        </h2>
                        <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>FIND WITH ME</h4>
                                <div className="button">
                                    <button className='btn_shadow'>
                                        <i className='fab fa-facebook-f'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-instagram'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-linkedin-in'></i>
                                    </button>
                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>BEST SKILL ON</h4>
                                <button className='btn_shadow'>
                                    <img src='' alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src='' alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src='' alt='' />
                                </button>
                            </div>
                        </div>
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