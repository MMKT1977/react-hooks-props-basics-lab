import React from "react";
import Links from "./Links";

function About(props) {

  
  return (
    <div id="about">
      <h2>About Me</h2>
     {/* {bio && bio.length > 1 ? <p>{bio}</p> : null}
     if (!props.bio){
      return null;
     }
     return */}
     <p>{props.bio}</p>; {/*add if else statement to render or not if prop of bio is passed */}


      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      
      <Links github ="https://github.com/liza"linkedin= "https://www.linkedin.com/in/liza/"/>

      
    </div>
  );
}

export default About;
