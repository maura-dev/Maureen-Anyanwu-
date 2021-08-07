import React from 'react';
import '../App.css';
import {ProjectCard} from '../components/skillsCard'
import i2talk from '../images/i2talk.png'
import BlockAfric from '../images/blockafric.png';
import HN from '../images/hn.png';
import Dorcspark  from '../images/dorcspark.png';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  justifyContent: 'center',
	  flexWrap: 'wrap',
	  '& > *': {
		margin: theme.spacing(1),
		marginBottom:"30px",
		borderRadius:"4px",
		color:"var(--button-color)",
		fontWeight:"500",
		boxShadow: "5px 5px 8px #949494,-5px -5px 8px #fffffe",
		[theme.breakpoints.down('xs')]: {
			margin: theme.spacing(0.8),
		  },
	},
	},
  }));

  const handleClick=()=>{
	  console.log("clicked")
  }
  
function Projects() {
	const classes = useStyles();

		return(
			<div className="project-page">
				<div className="top-bg">
					<p>Here is a list of some tools I use as a frontend developer</p>
					<div className={classes.root}>
						<Chip label="HTML 5" onClick={handleClick} />
						<Chip label="CSS 3" onClick={handleClick} />
						<Chip label="Vanilla JavaScript" onClick={handleClick} />
						<Chip label="ReactJS" onClick={handleClick} />
						<Chip label="NextJS" onClick={handleClick} />
						<Chip label="Chakra UI" onClick={handleClick} />
						<Chip label="Material UI" onClick={handleClick} />
						<Chip label="Git" onClick={handleClick} />
						<Chip label="Github" onClick={handleClick} />
						<Chip label="Bootstrap" onClick={handleClick} />
					</div>
				</div>
				<div className="overlay">My Projects</div>
				<div className="down-bg">
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
				</div>
			</div>
		)
}

export default Projects;