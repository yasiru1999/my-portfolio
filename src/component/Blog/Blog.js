import React from "react"
import Card from "./Card"
import BlogApi from "./BlogDataApi"
import "./Blog.css"


const Blog = () => {
    return (
        <>
            <section className='Portfolio Blog' id='blog'>
                <div className='container'>
                    <div className='heading text-center'>
                        <h4>VISIT TO MY BLOGS</h4>
                        <h1>My Blogs</h1>
                    </div>

                    <div className='content grid'>
                        {BlogApi.map((value, index) => {
                            return <Card key={index} img={value.img} title={value.title} desc={value.desc} link={value.link} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog