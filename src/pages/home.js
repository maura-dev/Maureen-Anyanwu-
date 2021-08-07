import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import  { GitHubBtn, InstagramBtn, LinkedInBtn, TwitterBtn, WhatsAppBtn } from '../components/iconBtn';

const StyledButton= withStyles({
		root:{
			border:"2px solid var(--button-color)",
			backgroundColor: "var(--button-color)",
			color:"var(--primary-color)",
			marginTop:"20px",
			transition:"0.8s ease-in-out"
		}
})(Button)

function Home() {
		
		return(
			<main>
				<div className="hero">

					<div className="hero-links">
						<GitHubBtn url="https://github.com/maura-dev"/>
						<LinkedInBtn url="https://linkedin.com/maureen-anyanwu-4b37aa1b4"/>
						<TwitterBtn url="https://twitter.com/anyanwu_maureen"/>
						<WhatsAppBtn url="https://wa.me/+2349067212981"/>
						<InstagramBtn url="https://instagram.com/reen_ie"/>		
					</div>
					<div className="hero-text">
						<h2 className="typewriter1">Hi there &#x1F44B;,</h2>
						<h2 className="typewriter2">I am Maureen Anyanwu</h2>
						<h2><span className="title">Frontend Developer</span>&nbsp;&nbsp;<span className="title">Technical Writer</span></h2><br/>
						<p style={{fontSize:"16px",marginTop: "-10px", fontWeight:"550"}}>
							Driven by the zeal to understand how the web works, I delved into 
							frontend developement where I get to work with various frontend 
							technologies in order to create and improve websites. 
							I also write to document my tech journey and share my knowledge on various topics. 
							Solving problems with my technical skills is what keeps me going.</p>
						<StyledButton fullWidth href="#about" className="button">Checkout my projects</StyledButton>

					</div>
					<div className="hero-img">
						
					</div>
					
				</div>
			</main>
		)
}

export default Home;