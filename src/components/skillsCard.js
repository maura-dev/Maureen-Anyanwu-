import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { withStyles,makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon  from '@material-ui/icons/GitHub';
import { Button } from '@material-ui/core';

const StyledImg= withStyles({
		root:{
			height:"50%",
			objectFit:"contain"
		}
})(CardMedia)

const projectStyles= makeStyles((theme)=> ({
		root:{
			maxWidth: 350,
			height:"auto",
			margin: "20px",
			backgroundColor:"var(--primary-color)",
			color:"var(--text-color)",
			[theme.breakpoints.down('xs')]: {
				maxWidth:"80%",
			  },
		}
}))

const IconButtonStyle= withStyles({
		root:{
			color:"var(--button-color)"
		}
})(IconButton)

export function ProjectCard({text,title,source, GUrl, WUrl }){
	const PCard = projectStyles();
	return(
		<Card className={PCard.root}>
		<br/>
			<CardActionArea>
				<StyledImg component="img" alt="maureen's projects" height="250px" image={source} />
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
		</Card>
	)
}

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 350,
	margin:"20px",
	[theme.breakpoints.down('xs')]: {
		maxWidth:"80%",
	  },
  },
  media: {
    height: 140,
  },
}));

export function BlogCard({image,title,date, children,link}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="medium post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
		  {children}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={link}>
          Read more
        </Button>
		<Button disabled size="small" color="primary">
          {date}
        </Button>
      </CardActions>
    </Card>
  );
}
