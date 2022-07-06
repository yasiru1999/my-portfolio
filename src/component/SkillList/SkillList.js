import "./SkillList.css";
import Skill from "../Skills/Skill";
import { programmingData } from "../../ProgrammingLangData";
import { databaseData } from "../../DatabaseData";
import { hostingData } from "../../HostingPlatformData";
import { developmentData } from "../../DevelopmentT&FData";

const SkillList = () => {
    return (
        <div className="pl" id="skills">
            <div className="pl-texts">
                <hr />
                <h1 className="pl-title">TECH SKILLS</h1>
            </div>
            <h2>Programming Languages</h2>
            <div className="pl-list">
                {programmingData.map((item) => (
                    <Skill key={item.id} title={item.title} img={item.img}  />
                ))}
            </div>
            <h2>Development Tools and Frameworks</h2>
            <div className="pl-list">
                {developmentData.map((item) => (
                    <Skill key={item.id} title={item.title} img={item.img}  />
                ))}
            </div>
            <h2>Databases</h2>
            <div className="pl-list">
                {databaseData.map((item) => (
                    <Skill key={item.id} title={item.title} img={item.img}  />
                ))}
            </div>
            <h2>Hosting Platforms</h2>
            <div className="pl-list">
                {hostingData.map((item) => (
                    <Skill key={item.id} title={item.title} img={item.img}  />
                ))}
            </div>
        </div>
    );
};

export default SkillList;