import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import FolderSpecialRoundedIcon from '@material-ui/icons/FolderSpecialRounded';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Home from '../pages/home';
import Projects from '../pages/projects';
import Blog from '../pages/blog';
import Contact from '../pages/contact';
import { LaptopWindows } from '@material-ui/icons';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
        	{children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: "var(--primary-color)",
  },
}));

const StyledLogo= withStyles((theme)=>({
		root:{
			fontFamily:' "Dancing Script", "cursive" ',
			fontSize:"50px",
			color:"var(--button-color)",
			position:"absolute",
			right:"20px",
      [theme.breakpoints.down('xs')]: {
        display:"none",
       },
		}
}))(Typography)

const tabStyles= makeStyles ((theme) => ({
	root:{
		color:"var(--text-color)",
		transition:"0.8s ease-in-out",
    [theme.breakpoints.between('sm','md')]: {
      minWidth:"100px",
    },
    
  }
}));


export default function ScrollableTabsButtonPrevent() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
  const Stab= tabStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="">
	  	

        <Tabs
          value={value}
          onChange={handleChange}
          variant={(window.outerWidth > 600) ? "scrollable": "fullWidth"}
          scrollButtons="off"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable prevent tabs example"
        >
          <Tab className={Stab.root} label="Profile" icon={<PersonRoundedIcon />} {...a11yProps(0)} />
          <Tab className={Stab.root} label="Projects" icon={<FolderSpecialRoundedIcon />} {...a11yProps(1)} />
          <Tab className={Stab.root} label="Blog" icon={<AssignmentRoundedIcon />} {...a11yProps(2)} />
          <Tab className={Stab.root} label="Contact" icon={<ContactPhoneRoundedIcon />} {...a11yProps(3)} />
		      <StyledLogo variant="h5">Maureen</StyledLogo>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Projects/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Blog/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Contact/>
      </TabPanel>
    </div>
  );
}
