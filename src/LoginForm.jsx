import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onLogin();
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form">
          <h2>Login Form</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
