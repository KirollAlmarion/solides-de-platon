import * as actionTypes from './actions'
import * as termes from '../components/termes'

const etatInitial={
    forme: termes.TETRAEDRE,
    angleX: 0,
    angleY: 0,
    angleZ: 0
    };

const reducer = (etat = etatInitial, action) => {
    switch (action.type){
        case actionTypes.CHANGE_FORME:
            return{
                ...etat,
                forme: action.payload
            }
        case actionTypes.CHANGE_ANGLE_X:
            return{
                ...etat,
                angleX: action.payload
            }
        case actionTypes.CHANGE_ANGLE_Y:
            return{
                ...etat,
                angleY: action.payload
            }
        case actionTypes.CHANGE_ANGLE_Z:
            return{
                ...etat,
                angleZ: action.payload
            }
        default:
            return etat
    }
}

export default reducer