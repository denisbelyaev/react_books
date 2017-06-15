import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './App.css';
import * as userActions from '../redux/modules/authors/actions';
const { addUser } = userActions.sagaActions;

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <Link to="/" className="header-link">Books</Link>
            <Link to="/authors" className="header-link">Authors</Link>
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
