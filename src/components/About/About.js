import './About.css';

import meTwo from '../../img/me2.JPG'

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img className="a-img" src={meTwo} alt="" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Hi, I am Fahim. I am a MERN stack web developer. I have been involved in web development for the last year.
                </p>
                <p className="a-desc">
                    I have done several projects with my acquired knowledge.I am doing MERN stack projects following the CRUD model. Technology is changing day by day and new things are being added. I can take the challenge to learn new things and apply them to my work by taking some time as required.
                </p>
            </div>
        </div>
    )
}

export default About
