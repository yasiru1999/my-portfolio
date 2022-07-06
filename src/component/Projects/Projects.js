import React from "react";
import "./Projects.css"
import Portfolio_data from "./Projects_data"
import Card from "./Card"

const Projects = () => {
    return(
        <>
            <section className='Portfolio top' id='portfolio'>
                <div className='container'>
                    <div className='heading text-center '>
                        <h4>VISIT TO MY PROJECTS</h4>
                        <h1>My Projects</h1>
                    </div>
                    <div className='content grid'>
                        {Portfolio_data.map((value, index) => {
                            return <Card key={index} image={value.img} title={value.title} tec={value.tec} desc={value.desc} link={value.link} />
                        })}
                    </div>
                    <div className='button f_flex mtop'>
                        <a href='https://github.com/yasiru1999'>
                            <button className='btn_shadow2'>
                                VIEW MORE PROJECTS<i className='fas fa-chevron-right'/>
                            </button>
                        </a>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;