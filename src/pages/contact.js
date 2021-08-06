import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
	<div className="project-page">
		<div style={{marginTop:"150px"}}>
      <hr/>
    </div>
    <div className="overlay2">Say hello!</div>
    <div className="down-bg">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
            id="standard-textarea"
            label="Message"
            placeholder=""
            variant="outlined"
            multiline
            rows={5}
            rowsMax={8}
        />
        <Button variant="contained" color="primary">
          Send
        </Button>

      </form>
    </div>
	</div>
  );
}
