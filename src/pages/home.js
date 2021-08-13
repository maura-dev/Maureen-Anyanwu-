import React from 'react';
import '../App.css';
import  { GitHubBtn, InstagramBtn, LinkedInBtn, TwitterBtn, WhatsAppBtn } from '../components/iconBtn';

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
						<p className="hero-p">
							Maureen Anyanwu is a developer passionate about solving problems with her technical skills. 
							Driven by the zeal to understand how the web works, I delved into 
							frontend development where I get to work with various frontend 
							technologies in order to create and improve websites. 
							I also write to document my tech journey and share my knowledge on various topics. 
							</p>
					</div>
					<div className="hero-img">
						
					</div>
					
				</div>
			</main>
		)
}

export default Home;