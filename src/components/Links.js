import react from "react";

function Links(props){
 return (
    <div>
        <h3>Links</h3>
         <div> <a href="https://ke.linkedin.com/">{props.linkedin}</a></div> 
          <div> <a href="https://github.com">{props.github}</a></div> 
        </div>
 )  
}
export default Links;