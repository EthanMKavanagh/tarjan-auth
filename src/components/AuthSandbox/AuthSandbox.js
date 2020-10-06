import React, {Component} from 'react';
import axios from 'axios';
import './style.css';

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

  render() {
    return (
      <div className='authSandbox'>
        <h1>Auth Sandbox</h1>

        <p>
          <button onClick={this.register}>Register</button>
          <button onClick={this.login}>Login</button>
          <button onClick={this.logout}>Logout</button>
          <button onClick={this.getUser}>Get User</button>
        </p>

      </div>
    )
  }
}

export default AuthSandbox;