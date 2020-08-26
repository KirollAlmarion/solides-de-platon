import React from 'react';
import { connect } from "react-redux"
import * as actions from "../store/actions.js"
import * as termes from './termes'
import '../style/Menu.css';

const Menu = (props) => {
    let classe=[];
    for (let i=0;i<5;i++){classe[i]="inactive"}
    switch (props.forme){
        case termes.TETRAEDRE: classe[0]="active"
                            break
        case termes.CUBE: classe[1]="active"
                            break
        case termes.OCTAEDRE: classe[2]="active"
                            break
        case termes.DODECAEDRE: classe[3]="active"
                            break
        case termes.ICOSAEDRE: classe[4]="active"
                            break
    }
    
    return (
        <nav>
            <ul>
                <li className={classe[0]} onClick={()=>{if (classe[0]==="inactive"){props.changeForme(termes.TETRAEDRE)}}}><code>Tétraèdre</code></li>
                <li className={classe[1]} onClick={()=>{if (classe[1]==="inactive"){props.changeForme(termes.CUBE)}}}><code>Cube</code></li>
                <li className={classe[2]} onClick={()=>{if (classe[2]==="inactive"){props.changeForme(termes.OCTAEDRE)}}}><code>Octaèdre</code></li>
                <li className={classe[3]} onClick={()=>{if (classe[3]==="inactive"){props.changeForme(termes.DODECAEDRE)}}}><code>Dodécaèdre</code></li>
                <li className={classe[4]} onClick={()=>{if (classe[4]==="inactive"){props.changeForme(termes.ICOSAEDRE)}}}><code>Icosaèdre</code></li>
            </ul>
        </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
