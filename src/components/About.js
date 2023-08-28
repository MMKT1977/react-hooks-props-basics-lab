import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p> {/*add if else statement to render or not if prop of bio is passed */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a>{props.links}</a>
      <a>{}</a>
      {/* add your <Links /> component here */}
      <div>
          { /* <h3>Links</h3>
            <div> <a href="https://ke.linkedin.com/">{props.linkedin}</a></div> 
          <div> <a href="https://github.com">{props.github}</a></div> */}
    </div> 
    </div>
  );
}

export default About;
