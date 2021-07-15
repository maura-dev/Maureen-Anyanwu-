import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import FolderSpecialRoundedIcon from '@material-ui/icons/FolderSpecialRounded';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import { withStyles } from '@material-ui/core/styles'

const StyledNav= withStyles({
		colorPrimary:{
			color:"var(--button-color)",
			backgroundColor:"var(--primary-color)"
		}
})(AppBar)

const StyledLogo= withStyles({
		root:{
			fontFamily:' "Dancing Script", "cursive" ',
			fontSize:"50px"
		}
})(Typography)

const IconButtonStyle= withStyles({
		root:{
			padding:"20px",
			color:"var(--button-color)",
			fontSize:"50px"
		}
})(IconButton)

export default function Header() {
		return(
		    <StyledNav>
		    	<Toolbar>
			      	<StyledLogo variant="h5">
			            Maureen
			         </StyledLogo>

			         <div className="header-icons">
				      	<IconButtonStyle>
				            <Link to="/"><PersonRoundedIcon fontSize="large"/></Link>
				         </IconButtonStyle>

				         <IconButtonStyle>
				            <Link to="/projects"><FolderSpecialRoundedIcon fontSize="large" /></Link>
				         </IconButtonStyle>

				         <IconButtonStyle>
				            <Link to="/blog"><AssignmentRoundedIcon fontSize="large"/></Link>
				         </IconButtonStyle>

				      	<IconButtonStyle>
				            <Link to="/contact"><ContactPhoneRoundedIcon fontSize="large"/></Link>
				         </IconButtonStyle>
			         </div>
			    </Toolbar>

		      </StyledNav>
		)
}
