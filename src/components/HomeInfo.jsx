import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center"> {text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="
        sm:text-xl 
        sm:leading-snug
        text-center
        neo-brutalism-blue
        py-4 px-8 text-white mx-5"
    >
      Hi, I'm
      <span
        className="
                    font-semibold
                    mx-2 text-white"
      >
        Tolu
      </span>
      👋
      <br />A Software Developer
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "Bachelor's Degree and experience working in a company. I picked up many skills along the way"
      }
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text={
        "Involved in multiple company projects and personal practice project"
      }
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text={
        "Looking to talk about projects or has my portfolio interested you?"
      }
      link="/about"
      btnText="Let's talk"
    />
  ),
};



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo