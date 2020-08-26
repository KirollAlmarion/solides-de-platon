import React from 'react';
import { connect } from "react-redux";
import Solide from './Solide';
import * as actions from "../store/actions.js"
import * as termes from './termes'
import '../style/Vue.css';

const Vue = (props) => {
    let angleCourant;
    switch (props.vue){
        case termes.FACE: angleCourant=props.angleZ
                            break
        case termes.GAUCHE: angleCourant=props.angleX
                            break
        case termes.HAUT: angleCourant=props.angleY
                            break
    }

    const changeAngle = (nouvelAngle) => {
        nouvelAngle = Number(nouvelAngle);
        console.log(angleCourant);
        switch (props.vue){
            case termes.FACE:   props.changeAngleZ(nouvelAngle);
                                angleCourant=props.angleZ
                                break
            case termes.GAUCHE: props.changeAngleX(nouvelAngle);
                                angleCourant=props.angleX
                                break
            case termes.HAUT:   props.changeAngleY(nouvelAngle);
                                angleCourant=props.angleY
                                break
        }
    }

    return (
        <section>
            <h2><code>Vue : {props.vue}</code></h2>
            <fieldset className={props.vue}>
                <legend>&#8635;</legend>
                    <input type="number" id="angle" name="angle" min="0" max="360" value={angleCourant} size="8" onChange={(event)=>{changeAngle(event.target.value)}}></input>
                    <input type="range" name="angle" min="0" max="360" value={angleCourant} onChange={(event)=>{changeAngle(event.target.value)}}></input>
            </fieldset>
            <div className="affichage">
                <div className="rendu">
                    <Solide vue={props.vue} />
                </div>
            </div>
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Vue)
