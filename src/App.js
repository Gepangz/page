import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import action from './Actions/index';
import logo from './logo.svg';
import './App.css';

function mapStateToProps(state) {
    return {
      value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => {
            dispatch(action.sync('increase'))
        },
        onHandleDoubleClick: () => {
            dispatch(action.async(
                action.sync('decrease')
            ));
        }
    }
}

class App extends Component {
    render() {
        const { value, onIncreaseClick, onHandleDoubleClick } = this.props

        return ( 
            <div className = "App">
                <header className = "App-header" >
                <img src = { logo } onClick={onIncreaseClick} onDoubleClick={onHandleDoubleClick} className = "App-logo" alt = "logo" / >
                <h1 className = "App-title" > Welcome to React </h1> 
                </header > 
                <p className = "App-intro">
                {value} To get started, edit <code>src / App.js</code> and save to reload. 
                </p> 
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)