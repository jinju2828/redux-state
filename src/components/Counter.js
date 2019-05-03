import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    render(){
        return(
            <div>
                <h1>Value : {this.props.value}</h1>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        value: state.counter.value
    }
}

Counter = connect(mapStateToProps)(Counter);
export default Counter;
// export default withTracker(withRouter(connnect(mapStateToProps)(Counter)));