import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  links.map((item) => {
    return (
      <a key={item} href="">{item}</a>
    )
  })
  return ( 
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
  </nav>
  )
}


export default NavBar;
