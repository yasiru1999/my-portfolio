import React, {useState} from "react";
import './Header.css'
import logo from "../../pic/ff.png"
const Header = () => {
    //when scroll header at top
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    // Toogle Menu
    const [Mobile, setMobile] = useState(false)

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={logo} alt='' width='60px'/>
                    </div>

                    <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            <li><a href="#skills">Tech Skills</a></li>
                            <li><a href="#portfolio">Projects</a></li>
                            <li><a href="#blog">Blogs</a></li>
                            <li><a href="#contact">Contact Me</a></li>
                            <li>
                                    <button
                                        className='home-btn'
                                        onClick={() => openInNewTab('https://drive.google.com/file/d/1lwHq_02VSX_aoMjI4lAOCVjAMB5dfjtB/view?usp=sharing')}
                                    >My Resume</button>
                            </li>
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fas fa-times close home-btn'/> : <i className='fas fa-bars open'/>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header