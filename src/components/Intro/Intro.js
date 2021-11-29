import './Intro.css';
import me from '../../img/me.png';

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name" >Forhad Fahim </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">MERN stack</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        <b>Acquired Skills : </b>HTML5,CSS3,Bootstrap css,Tailwind css,React.js,Material UI,Node.js,Express.js,MongoDB,Firebase.<br />
                        <b>Familiar : </b>React Native,Sass,Redux,TypeScript.<br />
                        <button className="a-btn"><a className="a-link" href="https://docs.google.com/document/d/1WTXYJnhT2w_pm2JqIwgvNwQgsUpGRwRGEfpXu47zGHE/export?format=pdf">Download Resume</a></button>
                    </p>

                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img className="i-img" src={me} alt="" />
            </div>
        </div>
    )
}

export default Intro
