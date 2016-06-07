'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  TextInput,
  View
} from 'react-native';


import Button from '../components/button';
import Header from '../components/header';
import Login from './login';
import styles from '../styles/common-styles.js';
import Firebase from 'firebase';
let app = new Firebase("https://reactfireitems.firebaseio.com/");

export default class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: true,
      email: '',
      password: ''
    };
  }

  signup() {
    this.setState({
      loaded: false
    });

    app.createUser({
      'email': this.state.email,
      'password': this.state.password
    }, (error, userData)=> {
      if (error) {
        switch(error.code) {
          case "EMAIL_TAKEN":
            alert("The new user cannot be made because your email is already taken.");
            break;
          case "INVALID_EMAIL":
            alert("The specified email is invalid");
            break;
          default:
            alert("Error creating user.");
            break;
        }
      } else {
          alert("Your account was created!");
        // FIX!

        this.setState({
          email: ''.
          password: '',
          loaded: true
        })
      }
    })
  },

  goToLogin() {
    this.props.navigator.push({
      component: Login
    });
  }

  render() {
    return (
        <View style={styles.container}>
          <Header text="Signup" loaded={this.state.loaded}/>
          <View style={styles.body}>
            <TextInput
              style={styles.textinput}
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
              placeholder={"Email"}
            />
            <TextInput
              style={styles.textinput}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              secureTextEntry={true}
              placeholder={"Password"}
            />
            <Button
              text="Sign Up"
              onpress={this.signup.bind(this)}
              button_styles={styles.primary_button}
              button_text_styles={styles.primary_button_text}
            />
            <Button
              text="Log In"
              onpress={this.goToLogin.bind(this)}
              button_styles={styles.transparent_button}
              button_text_styles={styles.transparent_button_text}
            />
          </View>
        </View>
    );
  }
}

AppRegistry.registerComponent("signup", () => signup);
