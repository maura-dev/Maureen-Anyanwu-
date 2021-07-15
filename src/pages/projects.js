import React from 'react';
import '../App.css';
import {ProjectCard} from '../components/skillsCard'
import i2talk from '../images/i2talk-iMac.png'
import BlockAfric from '../images/Screenshot (54)-iMac.png';
import HN from '../images/Screenshot (55)-iMac.png';
import Dorcspark  from '../images/Screenshot (56)-iMac.png';
import Mine from '../images/Screenshot (57)-iMac.png';
//import BlockAfric from '../images/Screenshot (54)-iMac.png';
function Projects() {
		
		return(
			<div className="project-page">
				<h3>My <span style={{color:"var(--button-color)"}}>Projects</span></h3>
				<ProjectCard  
					title="i2talk Chat App" 
					text="i2talk is a web-based chatting application created with ReactJS. It infuses features like chatrooms, idiary for storing messages, isearch for user based location search and so much more."
					source={i2talk}
					GUrl="https://github.com/maura-dev/i2talk-react-project"
					WUrl="https://i2talk-chat-app.netlify.app"/>	
				<ProjectCard  
					title="BlockAfric"
					text="A web-based fin-tech application for saving money locally as well as in foreign currencies and stocks in the financial market"
					source={BlockAfric}
					GUrl="https://github.com/maura-dev/block-afric-task"
					WUrl="https://block-afric-task.netlify.app"/>
				<ProjectCard 
					title="HackerNews Replica"
					text="This is a replica of HackerNews website created with ReactJS.Thhey bring news relating to science and technology"
					source={HN}
					GUrl="https://github.com/maura-dev/hn-app-replica"
					WUrl="https://hn-replica.netlify.app"/>
				<ProjectCard 
					title="Dorcspark"
					text="This is a replica of Dorcspark website which is a company that provides digital solutions to businesses. This is created using HTML, CSS and Vanilla Javascript"
					source={Dorcspark}
					GUrl="https://github.com/maura-dev/dorcspark"
					WUrl="https://maura-dev.github.io/dorcspark"/>

				<ProjectCard 
					title="Portfolio Website"
					text="This is a portfolio website created with ReactJS and Material UI. It  has a toggle between light and dark modes."
					source={Mine}
					GUrl="https://github.com/maura-dev/portfolio"
					WUrl="https://Maureen-Anyanwu.netlify.app"/>
			</div>
		)
}

export default Projects;