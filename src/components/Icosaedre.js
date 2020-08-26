import React from 'react';
import equilateral from '../img/equilateral.svg';
import '../style/Icosaedre.css';

const Icosaedre = (props) => {
    let faces = [];
    for (let i=1;i<21;i++){
                        faces[i] = <div className={`face-ico`} id={`ico${i}`} key={i} ><img src={equilateral} alt={"triangle équilatéral"} /></div>
                        }
    
    return (
        <div className="icosaedre" style={props.style}>
        {faces}            
        </div>
    )
}

export default Icosaedre