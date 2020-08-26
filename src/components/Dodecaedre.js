import React from 'react';
import pentagone from '../img/pentagone.svg';
import '../style/Dodecaedre.css';


const Dodecaedre = (props) => {
    const   arete=10,
            apotheme= (arete / 2 ) * Math.sqrt(1 + (2/Math.sqrt(5))),
            hauteur= (arete / 2) * Math.sqrt(5 + 2 * Math.sqrt(5)),
            deltaHauteur= (arete / 2) / Math.tan((2* Math.PI) / 5),
            decalageHauteur= (arete / 2) * (Math.sqrt(5 + 2 * Math.sqrt(5)) - 1 / Math.tan((2* Math.PI) / 5)),
            largeur= (1 + Math.sqrt(5)) * (arete /2),
            decalageXface= (30 - largeur) / 2,
            decalageYface= (30 - hauteur - deltaHauteur) / 2,
            angleDiedre=116.56,
            angleComplementaire=angleDiedre-180,
            rayonsphereInscrite= (arete / 2) * Math.sqrt(2.5 + 1.1 * Math.sqrt(5)),
            decalageX = apotheme * Math.sin(Math.PI / 5),
            decalageY = apotheme * (1 + Math.cos(Math.PI / 5)),
            decalageXbis = apotheme * Math.cos(Math.PI / 10),
            decalageYbis = apotheme * (1 - Math.sin(Math.PI / 10));
    let faces = [];
    for (let i=1;i<13;i++){
                        faces[i] = <div className={`face-dodecaedre`} id={`dodecaedre${i}`} key={i} style={{width: largeur +'vh', height: hauteur +'vh', left: decalageXface + 'vh', top: decalageYface +'vh'}}><img src={pentagone} style={{maxWidth: largeur +'vh'}} alt="pentagone régulier" /></div>
                        }
    faces[1].props.style.transform= `translateZ(${rayonsphereInscrite}vh)`;
    faces[2].props.style.transform= `translateX(${decalageXbis}vh) translateY(-${decalageYbis}vh) translateZ(${rayonsphereInscrite}vh) rotateZ(-72deg) rotateX(${angleDiedre}deg)`;
    faces[6].props.style.transform= `translateX(-${decalageXbis}vh) translateY(-${decalageYbis}vh) translateZ(${rayonsphereInscrite}vh) rotateZ(72deg) rotateX(${angleDiedre}deg)`;
    faces[4].props.style.transform= `translateZ(${rayonsphereInscrite}vh) rotateX(${angleDiedre}deg)`;
    faces[5].props.style.transform= `translateX(-${decalageX}vh) translateY(-${decalageY}vh) translateZ(${rayonsphereInscrite}vh) rotateZ(144deg) rotateX(${angleDiedre}deg)`;
    faces[10].props.style.transform= `translateX(${decalageX}vh) translateY(-${decalageY}vh) translateZ(${rayonsphereInscrite}vh) rotateZ(-144deg) rotateX(${angleDiedre}deg)`;
    faces[12].props.style.transform= `translateY(-${decalageHauteur}vh) translateZ(-${rayonsphereInscrite}vh) rotateX(180deg)`;
    faces[9].props.style.transform= `translateY(-${decalageHauteur}vh) translateZ(-${rayonsphereInscrite}vh) rotateX(${angleComplementaire}deg)`;
    faces[7].props.style.transform= `translateX(${decalageXbis}vh) translateY(${decalageYbis-decalageHauteur}vh) translateZ(-${rayonsphereInscrite}vh) rotateZ(72deg) rotateX(${angleComplementaire}deg)`;
    faces[11].props.style.transform= `translateX(-${decalageXbis}vh) translateY(${decalageYbis-decalageHauteur}vh) translateZ(-${rayonsphereInscrite}vh) rotateZ(-72deg) rotateX(${angleComplementaire}deg)`;
    faces[8].props.style.transform= `translateX(${decalageX}vh) translateY(${decalageY-decalageHauteur}vh) translateZ(-${rayonsphereInscrite}vh) rotateZ(144deg) rotateX(${angleComplementaire}deg)`;
    faces[3].props.style.transform= `translateX(-${decalageX}vh) translateY(${decalageY-decalageHauteur}vh) translateZ(-${rayonsphereInscrite}vh) rotateZ(-144deg) rotateX(${angleComplementaire}deg)`;
    return (
        <div className="dodecaedre" style={props.style}>
        {faces}
        </div>
    )
}

export default Dodecaedre