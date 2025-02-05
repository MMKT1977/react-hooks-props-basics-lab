import React from "react"


function Links(links){
    return(
    <div>
        <h3>Links</h3>
        <a href={links.github}>Github </a>
        <a href={links.linkedin}>Linkedin </a>
    </div>
    )
    
}
export default Links;