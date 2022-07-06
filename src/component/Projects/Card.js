import React, { useState } from "react"

const Card = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }
    return (
        <>
            <div className='box btn_shadow '>
                <div className='img'>
                    <img src={props.image} alt='' onClick={toggleModal} />
                </div>
                <div className='category d_flex'>
                    <span onClick={toggleModal}></span>
                    <label>
                        <a href='#popup' onClick={toggleModal}>
                            <i className='fas fa-arrow-right'/>
                        </a>
                    </label>
                </div>
                <div className='title'>
                    <h2 onClick={toggleModal}>{props.title}</h2>
                    <p onClick={toggleModal}>{props.tec}</p>
                    <a href='#popup' className='arrow' onClick={toggleModal}>
                        <i className='fas fa-arrow-right'/>
                    </a>
                </div>
            </div>

            {/* Popup box */}
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content d_flex'>
                        <div className='modal-img left'>
                            <img src={props.image} alt='' />
                        </div>
                        <div className='modal-text right'>
                            <span>{props.tec}</span>
                            <h1>{props.title}</h1>
                            <p>{props.desc}</p>
                            <div className='button f_flex mtop'>
                                <a href={props.link}>
                                    <button className='btn_shadow'>
                                        VIEW PROJECT<i className='fas fa-chevron-right'/>
                                    </button>
                                </a>

                            </div>
                            <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <i class='fas fa-times'/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card