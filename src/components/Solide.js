import React from 'react';
import { connect } from "react-redux"
import * as actions from "../store/actions.js"
import * as termes from './termes'
import Tetraedre from './Tetraedre';
import Cube from './Cube';
import Octaedre from './Octaedre';
import Dodecaedre from './Dodecaedre';
import Icosaedre from './Icosaedre';

const Solide = (props) => {

    let angleCamera={x:0, y:0, z:0};

    switch (props.vue){
        case termes.GAUCHE: angleCamera.y= 90
                            break
        case termes.HAUT: angleCamera.x= -90
                            break
    }
    let rotation;
    if (props.vue === termes.TRIDI){
                    rotation={
                        transform: `rotateX(${props.angleX}deg) rotateY(${props.angleY}deg) rotateZ(${props.angleZ}deg)`
                    }
    }
    else{
            let transformation = `rotateX(${angleCamera.x}deg) rotateY(${angleCamera.y}deg) rotateZ(${angleCamera.z}deg)`;
                    
        switch (props.vue){
            case termes.FACE: rotation={
                                        transform: `rotate(${props.angleZ}deg) ${transformation}`
                                        }
                                break
            case termes.GAUCHE: rotation={
                                        transform: `rotate(${props.angleX}deg) ${transformation}`
                                        }
                                break
            case termes.HAUT: rotation={
                                        transform: `rotate(${props.angleY}deg ) ${transformation}`
                                        }
                                break
        }
    }
    
    return (
        <>
        {props.forme === termes.TETRAEDRE && <Tetraedre style={rotation} />}
        {props.forme === termes.CUBE && <Cube style={rotation} />}
        {props.forme === termes.OCTAEDRE && <Octaedre style={rotation} />}
        {props.forme === termes.DODECAEDRE && <Dodecaedre style={rotation} />}
        {props.forme === termes.ICOSAEDRE && <Icosaedre style={rotation} />}
        </>
    )
}

const mapStateToProps = (etat) =>{//envoie le state de redux dans les props
    return etat
}

const mapDispatchToProps = (dispatch) =>{
    return{
        //de type clef: "valeur"
        changeForme: forme => dispatch(actions.changeForme(forme)),
        changeAngleX: angle => dispatch(actions.changeAngleX(angle)),
        changeAngleY: angle => dispatch(actions.changeAngleY(angle)),
        changeAngleZ: angle => dispatch(actions.changeAngleZ(angle))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Solide)
