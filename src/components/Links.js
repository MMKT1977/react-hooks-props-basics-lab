import react from "react";

function Links({github,linkedin}){
 return (
    <div>
        <h3>Links</h3>
         <div> <a href ={linkedin}>{linkedin}</a></div> 
          <div> <a href={github}>{github}</a></div> 
        </div>
 )  
}
export default Links;