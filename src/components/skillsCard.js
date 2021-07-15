import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon  from '@material-ui/icons/GitHub';
const StyledImg= withStyles({
		root:{
			height:"50%"
		}
})(CardMedia)

const SCard= withStyles({
		root:{
			width:"12%",
			height:"auto",
			marginBottom: "20px"
		}
})(Card)

const PCard= withStyles({
		root:{
			width:"40%",
			height:"auto",
			marginBottom: "20px",
			backgroundColor:"var(--primary-color)",
			color:"var(--text-color)"
		}
})(Card)

const IconButtonStyle= withStyles({
		root:{
			color:"var(--button-color)"
		}
})(IconButton)

export function SkillsCard({text,source }){
	return(
		<SCard>
			<CardActionArea>
				<StyledImg component="img" image={source} alt="skills"/>
				<Typography variant="h6" component="p" align="center">{text}</Typography>
			</CardActionArea>
		</SCard>
	)
}

export function ProjectCard({text,title,source, GUrl, WUrl }){
	return(
		<PCard>
		<br/>
			<CardActionArea>
				<CardMedia component="img" alt="maureen's projects" height="300" image={source} />
				<CardContent>
					<Typography gutterBottom variant="h5"component="h2">{title}</Typography>
					<Typography variant="body2" component="p">{text}</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Link to={{pathname: GUrl}} target="_blank"><IconButtonStyle>
					<GitHubIcon/>
				</IconButtonStyle></Link>
				<Link to={{pathname: WUrl}} target="_blank"><IconButtonStyle>
					<LanguageIcon />
				</IconButtonStyle></Link>
			</CardActions>
		</PCard>
	)
}