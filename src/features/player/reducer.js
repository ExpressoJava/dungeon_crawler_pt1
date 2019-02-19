
const initialState = {
    position: [0, 0],
}

const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'MOVE_PLAYER': // this will fire whenever our store get dispatch a MOVE_PlAYER action
            return {
                ...action.payload //spread operator to spread out whatever that position was. see dispatchMovment in movement.js
            }
        default: 
            return state
    }
}

export default playerReducer;