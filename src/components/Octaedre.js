import React from 'react';
import '../style/Octaedre.css';

const Octaedre = (props) => {
    let couleurFace = ["sombre", "claire"];
    let faces = [];
    for (let i=1;i<9;i++){
                        faces[i] = <div className={`equilateral-octa face-${couleurFace[i % 2]}`} id={`octa${i}`} key={i} />
                        }
    console.log(faces);
    return (
        <div className="octaedre" style={props.style}>
        {faces}
            
        </div>
    )
}

export default Octaedre