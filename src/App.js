import React from 'react';
import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";
import appConfig from "./config";
import awsmobile from './aws-exports';

Config.region = awsmobile.aws_cognito_region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: appConfig.IdentityPoolId
});

const userPool = new CognitoUserPool({
  UserPoolId: appConfig.UserPoolId,
  ClientId: appConfig.ClientId,
});

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      given_name: '',
      family_name: ''
    };
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleGivenNameChange(e) {
    this.setState({given_name: e.target.value});
  }

  handleFamilyNameChange(e) {
    this.setState({family_name: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    const given_name = this.state.given_name.trim();
    const family_name = this.state.family_name.trim();
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      }),
      new CognitoUserAttribute({
        Name: 'given_name',
        Value: given_name,
      }),
      new CognitoUserAttribute({
        Name: 'family_name',
        Value: family_name,
      }),
    ];
    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('user name is ' + result.user.getUsername());
      console.log('call result: ', result);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text"
               value={this.state.given_name}
               placeholder="Given name"
               onChange={this.handleGivenNameChange.bind(this)}/>
        <input type="text"
               value={this.state.family_name}
               placeholder="Family name"
               onChange={this.handleFamilyNameChange.bind(this)}/>
        <input type="text"
               value={this.state.email}
               placeholder="Email"
               onChange={this.handleEmailChange.bind(this)}/>
        <input type="password"
               value={this.state.password}
               placeholder="Password"
               onChange={this.handlePasswordChange.bind(this)}/>
        <input type="submit" value="SIGN-UP" />
      </form>
    );
  }
}

export default SignUpForm;
