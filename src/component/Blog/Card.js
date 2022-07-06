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
                    <img src={props.img} alt='' onClick={toggleModal} />
                </div>
                <div className='title'>
                    <h2 onClick={toggleModal}>{props.title}</h2>
                    <a href='#popup'  onClick={toggleModal}>
                        <i class='fas fa-arrow-right'/>
                    </a>
                </div>
            </div>

            {/* Popup box */}
            {modal && (
                <div className='modal modal-blog'>
                    <div onClick={toggleModal} className='overlay'/>
                    <div className='modal-content'>
                        <div className='modal-img left'>
                            <img src={props.img} alt='' />
                        </div>
                        <div className='modal-text right'>
                            <h1>{props.title}</h1>
                            <p>{props.desc}</p>

                            <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <i class='fas fa-times'/>
                            </button>

                            <div className='contact mtop'>
                                <a href={props.link}>
                                    <div className='left'>
                                        <button className='btn_shadow'>Read...</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card