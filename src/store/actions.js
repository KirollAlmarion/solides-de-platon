//Action Types
export const CHANGE_FORME = "CHANGE_FORME"
export const CHANGE_ANGLE_X = "CHANGE_ANGLE_X"
export const CHANGE_ANGLE_Y = "CHANGE_ANGLE_Y"
export const CHANGE_ANGLE_Z = "CHANGE_ANGLE_Z"

//Action Creator
export const changeForme = forme =>{
    return{
        type: CHANGE_FORME,
        payload: forme
    }
}

export const changeAngleX = angle =>{
    let quotien = angle / 360;
    let reste = angle % 360;

    if (Math.abs(quotien)>1){angle = reste}
    if (angle<0){angle = 360 + angle}
    return{
        type: CHANGE_ANGLE_X,
        payload: angle
    }
}

export const changeAngleY = angle =>{
    let quotien = angle / 360;
    let reste = angle % 360;

    if (Math.abs(quotien)>1){angle = reste}
    if (angle<0){angle = 360 + angle}
    return{
        type: CHANGE_ANGLE_Y,
        payload: angle
    }
}

export const changeAngleZ = angle =>{
    let quotien = angle / 360;
    let reste = angle % 360;

    if (Math.abs(quotien)>1){angle = reste}
    if (angle<0){angle = 360 + angle}
    return{
        type: CHANGE_ANGLE_Z,
        payload: angle
    }
}