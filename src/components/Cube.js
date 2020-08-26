import React from 'react';
import '../style/Cube.css';

const Cube = (props) => {
    
    return (
        <div className="cube" style={props.style}>
                <div className="carre" id="carre-avant">&#9856;</div>
                <div className="carre" id="carre-arriere" >&#9861;</div>
                <div className="carre" id="carre-droite" >&#9858;</div>
                <div className="carre" id="carre-gauche" >&#9859;</div>
                <div className="carre" id="carre-haut" >&#9860;</div>
                <div className="carre" id="carre-bas" >&#9857;</div>
        </div>
    )
}

export default Cube