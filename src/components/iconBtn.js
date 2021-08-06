import React from 'react';
import { LinkedIn, GitHub, WhatsApp,Twitter,Instagram } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

const SGitHub= withStyles({
    root:{
        color:"white"
    }
})(GitHub)

const SLinkedIn= withStyles({
    root:{
        color:"white"
    }
})(LinkedIn)
const STwitter= withStyles({
    root:{
        color:"white"
    }
})(Twitter)
const SWhatsApp= withStyles({
    root:{
        color:"white"
    }
})(WhatsApp)
const SInstagram= withStyles({
    root:{
        color:"white"
    }
})(Instagram)

export function GitHubBtn({url}) {
  return (
    <a href={url}>
        <div style={{backgroundColor:"#333"}}  className="side">
            <SGitHub/>    
        </div>
    </a>
  );
}

export function LinkedInBtn({url}) {
    return (
        <a href={url}>
            <div style={{backgroundColor:"#2867b2"}}  className="side">
                <SLinkedIn/>
            </div>
        </a>
    );
  }

  export function WhatsAppBtn({url}) {
    return (
        <a href={url}> 
            <div style={{backgroundColor:"#25d366"}} className="side">
                <SWhatsApp/>
            </div>
        </a>
    );
  }

  export function TwitterBtn({url}) {
    return (
        <a href={url}> 
            <div style={{backgroundColor:"#1da1f2"}} className="side">
                <STwitter/>
            </div>
        </a>
    );
  }

  export function InstagramBtn({url}) {
    return (
        <a href={url}> 
            <div style={{background:"linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)"}} className="side">
                <SInstagram/>
            </div>
        </a>
    );
  }
