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
    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={logo} alt='' width='60px'/>
                    </div>

                    <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            <li><a href="#">home</a></li>
                            <li><a href="#">home</a></li>
                            <li><a href="#">home</a></li>
                            <li><a href="#">home</a></li>
                            <li><a href="#">home</a></li>
                            <li><button className='home-btn'>Buy Now</button></li>
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