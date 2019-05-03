import React, { Component } from 'react';
import { increment, decrement } from '../actions';
import { connect } from 'react-redux';

class Button extends Component {
    render(){
        return(
            <div>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrement: ()=> dispatch(increment()),
        onDecrement: ()=> dispatch(decrement())
    }
}

Button = connect(mapDispatchToProps)(Button);

export default Button;