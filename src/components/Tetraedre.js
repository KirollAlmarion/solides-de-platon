import React from 'react';
import '../style/Tetraedre.css';

const Tetraedre = (props) => {
    
    return (
        <div className="tetraedre" style={props.style}>
            <div className="equilateral" id="tetra-arriere"><p>&#9778;</p></div>
            <div className="equilateral" id="tetra-gauche"><p>&#9780;</p></div>
            <div className="equilateral" id="tetra-droite"><p>&#9781;</p></div>
            <div className="equilateral" id="tetra-base"><p>&#9783;</p></div>
        </div>
    )
}

export default Tetraedre