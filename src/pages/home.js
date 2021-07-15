import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles'
import LinkedIn from '../images/linkedin.png';
import Github from '../images/github.png';
import Twitter from '../images/twitter.png';
import WhatsApp from '../images/whatsapp.png';
import { SkillsCard } from '../components/skillsCard';
import Html from '../images/001-html-5-logo.svg';
import Css from '../images/002-css-3.svg';
import Js from '../images/003-javascript.svg';
import ReactJs from '../images/logo512.png';
import Git from '../images/004-git-logo.svg';
import NavigationIcon from '@material-ui/icons/Navigation';

const StyledButton= withStyles({
		root:{
			border:"2px solid var(--button-color)",
			backgroundColor: "var(--button-color)",
			color:"var(--primary-color)",
			marginTop:"40px",
			transition:"0.8s ease-in-out"
		}
})(Button)

const StyledButton2= withStyles({
		root:{
			border:"2px solid var(--button-color)",
			backgroundColor: "var(--secondary-color)",
			color:"var(--text-color)",
			marginTop:"40px",
			transition:"0.8s ease-in-out"
		}
})(Button)

const SFab= withStyles({
		root:{
			
			backgroundColor: "var(--button-color)",
			color:"var(--primary-color)",
			position:"absolute",
			right:"20px"
		}
})(Fab)

function Home() {
		
		return(
			<main>
				<a id="home">
				<div className="hero">

					<div className="hero-links">
						<a href="https://github.com/maura-dev"><img src={Github} alt="github" width="30px"  /></a>
						<a href="https://linkedin.com/maureen-anyanwu-4b37aa1b4"><img src={LinkedIn} alt="linkedin" width="30px" /></a>
						<a href="https://twitter.com/anyanwu_maureen"><img src={Twitter} alt="twitter" width="30px" /></a>
						<a href="https://wa.me/+2349067212981"><img src={WhatsApp} alt="whatsapp" width="30px" /></a>
						
					</div>
					<div className="hero-text">
						<h2>Hi there &#x1F44B;,</h2>
						<h2>I am Maureen Anyanwu</h2>
						<h2><span className="title">Frontend Developer</span>&nbsp;<span className="title">Technical Writer</span></h2><br/>
						<p>I work with various frontend technologies in order to improve websites. I also write on various technical topics suitable for beginners. I am a student of the University of Nigeria, Enugu Campus. Solving problems with my technical skills is what keeps me going.</p>
						<StyledButton fullWidth href="#about" className="button">Learn more</StyledButton>

					</div>
					<div className="hero-img">
						
					</div>
					
				</div>
				</a>

				<a id="about">
				<div className="one">
					<svg class="divider-svg" viewBox="0 0 1443 280" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1443 50.5C1164.5-26.5 158 478 .5 50.5V0H1443v50.5z" fill="var(--primary-color)" />
					</svg>
				</div>

				<div className="skills two">
					<div className="technical">
						<h3>My <span style={{color:"var(--button-color)"}}>Tools</span></h3>
						<SkillsCard text="HTML 5" source={Html}/>
						<SkillsCard text="CSS 3" source={Css}/>
						<SkillsCard text="Vanilla JavaScript" source={Js}/>
						<SkillsCard text="ReactjS" source={ReactJs}/>
						<SkillsCard text="Git and Github" source={Git}/>
					</div>

					<ButtonGroup fullWidth size="large">
						<StyledButton href="#about" className="button">View Resume</StyledButton>
						<StyledButton2 href="#about" className="button">						
							<Link to="/projects">view Projects</Link>
						</StyledButton2>
					</ButtonGroup>

					<SFab variant="extended" href="#home">
						<NavigationIcon />
						Back to Top
					</SFab>

					
				</div>
				</a>
			</main>
		)
}

export default Home;