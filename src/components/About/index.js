import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'


const buttons = document.querySelectorAll("a");
buttons.forEach((button) => {
  button.onclick = function(e){
    let x = e.c1ientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    this.appendChild(ripple);
    setTimeout(function(){
    ripple.remove( ) ;
    },600); // Isecond =l00ems
  }
});
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
        clearTimeout(timer);
    }
  });

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>Hello! I'm Mehedi Hasan Neloy, a passionate and dedicated computer science and engineering graduate specializing in frontend development. I have a strong eye for design and a deep understanding of user experience, which I combine to create visually stunning and user-friendly websites and applications.<br/>

With a solid foundation in HTML, CSS, and JavaScript, I leverage frameworks like React, Next.js, and Vite.js to build responsive and dynamic interfaces. I am proficient in using popular CSS libraries like Bootstrap, Material UI, and Tailwind CSS to create modern and aesthetically pleasing designs.<br/>

During my studies and practical experience, I have developed a comprehensive understanding of frontend development principles and best practices. I am skilled in state management using tools like React Redux and Redux Toolkit, ensuring efficient data flow and scalability in my projects.<br/>

I am a lifelong learner, always seeking to expand my knowledge and stay up-to-date with the latest industry trends and technologies. I enjoy collaborating with cross-functional teams, as it allows me to gain new perspectives and contribute to innovative solutions.<br/>

<p>Aside from coding, I am passionate about continuous improvement and enhancing the overall user experience. I pay close attention to details, ensuring pixel-perfect implementations and smooth interactions. I thrive in fast-paced environments and embrace challenges, constantly pushing myself to deliver high-quality results within tight deadlines.<br/>

I believe that technology has the power to transform lives and make a positive impact on society. As a frontend developer, I am committed to creating intuitive and accessible experiences that delight users and enhance their daily lives.</p>

Please feel free to explore my portfolio and projects to get a better sense of my skills and expertise. If you have any questions or would like to discuss potential collaborations, I would love to hear from you. Let's create something amazing together!
          </p>
          <p align="LEFT">
          I am a lifelong learner, always seeking to expand my knowledge and stay up-to-date with the latest industry trends and technologies. I enjoy collaborating with cross-functional teams, as it allows me to gain new perspectives and contribute to innovative solutions.<br/>

Aside from coding, I am passionate about continuous improvement and enhancing the overall user experience. I pay close attention to details, ensuring pixel-perfect implementations and smooth interactions. I thrive in fast-paced environments and embrace challenges, constantly pushing myself to deliver high-quality results within tight deadlines.
          </p>
          <p>
          I believe that technology has the power to transform lives and make a positive impact on society. As a frontend developer, I am committed to creating intuitive and accessible experiences that delight users and enhance their daily lives.<br/>

Please feel free to explore my portfolio and projects to get a better sense of my skills and expertise. If you have any questions or would like to discuss potential collaborations, I would love to hear from you. Let's create something amazing together!
          </p>
          <div className='wrapper'>
            <div className='btns'>
              <a href='/portfolio/Resume.pdf' download>Resume</a>
            </div>
          </div>
        </div>
        

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
