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

  render() {
    return (
      <>
        <h1>Auth Sandbox</h1>
        <button onClick={this.register}>Register</button>
      </>
    )
  }
}

export default AuthSandbox;