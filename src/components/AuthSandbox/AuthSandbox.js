import React, {Component} from 'react';
import axios from 'axios';

class AuthSandbox extends Component {


  register = () => {
    axios({
      method: 'POST',
      url: '/api/user/register',
      data: {
        username: 'schmedan',
        password: 'unicorn123'
      }
    });
  }

  login = () => {
    axios({
      method: 'POST',
      url: '/api/user/login',
      data: {
        username: 'schmedan',
        password: 'unicorn123'
      }
    });
  }

  logout = () => {
    axios({
      method: 'POST',
      url: '/api/user/logout'
    })
  }

  getUser = () => {
    axios({
      method: 'GET',
      url: '/api/user'
    }).then(res => {
      console.log('GET /user', res.data);
    });
  }

  getPets = () => {
    axios({
      method: 'GET',
      url: '/api/pet'
    }).then(res => {
      console.log('GET /pet', res.data);
    })
  };

  render() {
    return (
      <>
        <h1>Auth Sandbox</h1>

        <p>
          <button onClick={this.register}>Register</button>
          <button onClick={this.login}>Login</button>
          <button onClick={this.logout}>Logout</button>
        </p>

        <p>
          <button onClick={this.getUser}>Get User</button>
          <button onClick={this.getPets}>Get Pets</button>
        </p>

      </>
    )
  }
}

export default AuthSandbox;