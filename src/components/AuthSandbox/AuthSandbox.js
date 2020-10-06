import React, {Component} from 'react';
import './style.css';
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
    });
  }

  getUser = () => {
    axios({
      method: 'GET',
      url: '/api/user/'
    }).then(response => {
      console.log('GET /user', response.data);
    });
  }

  render() {
    return (
      <div className='authSandbox'>
        <h1>Auth Sandbox</h1>

        <p>
          <button onClick={this.register}>Register</button>
          <button onClick={this.login}>Login</button>
          <button onClick={this.logout}>Logout</button>
        </p>
        <p>
          <button onClick={this.getUser}>Get User</button>
        </p>
      </div>
    )
  }
}

export default AuthSandbox;