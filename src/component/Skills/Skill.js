import "./Skill.css";

const Projects = ({img,title,}) => {
    return (
        <div className="pS">
            <div className="p-img-b">
                <img src={img} alt="" className="ps-img" /> <h4>{title}</h4>
            </div>
            {/*<p className="p-para">{desc}</p>*/}
            {/*<p className="p-para">{tec}</p>*/}
            {/*<a href={link} target="_blank" rel="noreferrer">*/}
            {/*    <button className="p-button p-button-shadow">View Source Code</button>*/}
            {/*</a>*/}

        </div>
    );
};

export default Projects;