import React from 'react';

function Header(props) {
    const headerStyles = {
        backgroundColor: "white",
        color: "#888",
       
    }

  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}


export default Header;