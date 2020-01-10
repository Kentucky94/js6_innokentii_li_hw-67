import './Lock.css';

import React, {Component} from 'react';
import {connect} from "react-redux";

class Lock extends Component {
  render() {
    const buttonOrder = [7, 8, 9, 4, 5, 6, 1, 2, 3];

    const buttons = buttonOrder.map(button => <button onClick={this.props.addNumber}>{button}</button>);

    return (
      <div className='Lock'>
        <p className={this.props.displayColor}>{this.props.value}</p>
        {buttons}
        <button onClick={this.props.deleteLast}>&#60;</button>
        <button onClick={this.props.addNumber}>0</button>
        <button onClick={this.props.confirmCode}>E</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.value,
    displayColor: state.displayColor,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addNumber: (event) => dispatch({type: 'ADD_NUMBER', number: event.target.innerHTML}),
    deleteLast: () => dispatch({type: 'DELETE_LAST'}),
    confirmCode: () => dispatch({type: 'CONFIRM_CODE'}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lock);