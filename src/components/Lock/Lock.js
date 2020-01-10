import './Lock.css';

import React, {Component} from 'react';
import {connect} from "react-redux";

class Lock extends Component {
  render() {
    return (
      <div className='Lock'>
        <p className={this.props.displayColor}>{this.props.value}</p>
        <button onClick={this.props.addSeven}>7</button>
        <button onClick={this.props.addEight}>8</button>
        <button onClick={this.props.addNine}>9</button>
        <button onClick={this.props.addFour}>4</button>
        <button onClick={this.props.addFive}>5</button>
        <button onClick={this.props.addSix}>6</button>
        <button onClick={this.props.addOne}>1</button>
        <button onClick={this.props.addTwo}>2</button>
        <button onClick={this.props.addThree}>3</button>
        <button onClick={this.props.deleteLast}>&#60;</button>
        <button onClick={this.props.addZero}>0</button>
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
    addOne: () => dispatch({type: 'ADD_ONE'}),
    addTwo: () => dispatch({type: 'ADD_TWO'}),
    addThree: () => dispatch({type: 'ADD_THREE'}),
    addFour: () => dispatch({type: 'ADD_FOUR'}),
    addFive: () => dispatch({type: 'ADD_FIVE'}),
    addSix: () => dispatch({type: 'ADD_SIX'}),
    addSeven: () => dispatch({type: 'ADD_SEVEN'}),
    addEight: () => dispatch({type: 'ADD_EIGHT'}),
    addNine: () => dispatch({type: 'ADD_NINE'}),
    addZero: () => dispatch({type: 'ADD_ZERO'}),
    deleteLast: () => dispatch({type: 'DELETE_LAST'}),
    confirmCode: () => dispatch({type: 'CONFIRM_CODE'}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lock);