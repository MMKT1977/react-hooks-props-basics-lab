import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      
      <Home name={user.name} city={user.city} color={user.color}/>
      
      <About bio ={user.bio} links={user.links}/>
      
      <Links links={{github:"https://github.com/liza" , linkedin:"https://www.linkedin.com/in/liza/"}}/>
    </div>
  );
}

export default App;
