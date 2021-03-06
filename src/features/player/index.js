import React from 'react'
import walkSprite from './player_walk.png'
import { connect } from 'react-redux'

import handleMovement from './movement'

const Player = props => {
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: '0 0',
                width: '40px',
                height: '40px',
            }}
        />
    )
}


const mapStateToProps = state => {
    return {
        ...state.player,
    
    }
}
export default connect(mapStateToProps)(handleMovement(Player));

//immutable example:

// function getState(fn1, fn2) {
//     return function(component) {
//         return component
//     }
        
// }

// function foo(component) {
//     return component
// }