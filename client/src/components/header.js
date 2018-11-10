import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { verifyJwt, signoutUser } from '../actions';

class Header extends Component {

  componentWillMount() {
    if (this.props.authenticated && !this.props.user) {
      this.props.verifyJwt();
    }
  }

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className="navbar-nav nav-item dropdown ml-auto">
          <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sup Bro {this.props.username}</a>
          <div className="dropdown-menu" aria-labelledby="dropdown02">
            <Link className="dropdown-item" to="/my_posts">My Posts</Link>
            <Link className="dropdown-item" to="/profile">Update Profile</Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" to="/settings">Change Password Bro</Link>
            <Link className="dropdown-item" to="/" onClick={this.props.signoutUser}>Sign out Bro</Link>
          </div>
        </div>
      );
    } else {
      return (
        <ul className="navbar-nav">
          <li className="nav-item" key={1}>
            <Link className="btn btn-primary" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item" key={2}>
            <Link className="btn btn-secondary ml-sm-2" to="/signin">Sign In</Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-md fixed-top">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleContainer" aria-controls="navbarsExampleContainer" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand" to="/">CRUD</Link>

          <div className="collapse navbar-collapse" id="navbarsExampleContainer">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/posts">Web Panel Posts</Link>
              </li>
            </ul>
            <div className="ml-auto">
              {this.renderLinks()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    username: state.auth.username,
  };
}

export default connect(mapStateToProps, { verifyJwt, signoutUser })(Header);
