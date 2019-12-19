import React, { Component } from 'react';
import {  Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity, TextInput } from 'react-native';
import PasswordInput from './Components/password';

export default class App extends React.Component {

  constructor() {
      super();
      this.state = {
         password: ''
      };
      this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
      }

   handlePasswordChanges(event) {
      this.setState({ password: event.target.value});
   }
   render() {
     let pic = {
     uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
   };
       return (
        <div>
            <header>
               <h1> React Strength Indicator Component </h1>
            </header>

                <PasswordInput
                value={this.state.password}
                placeholder='Type your password'
                handleChanges={this.handlePasswordChanges}
                />

         </div>
   );
   }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    paddingBottom: 40,
    fontWeight: "bold"
    },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    marginTop: 150

  },
  grid: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15
   },
    loginScreenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'grey',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
}
})
