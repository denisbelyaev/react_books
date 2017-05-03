import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import * as userActions from '../redux/modules/users/actions';
const { addUser } = userActions.sagaActions;

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
            <Link to="/">Welcome</Link>
            <Link to="/settings">Settings</Link>
            <button onClick={() => {this.props.addUser({name: "Vasya"})}}>saga</button>
        </div>
      </div>
    );
  }
}

function bindAction(dispatch) {
  return {
    addUser: user => dispatch(addUser.request(user))
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.route
  }
}

export default connect(mapStateToProps, bindAction)(Header);
