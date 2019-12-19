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
     const { password } = this.state;
       return (
         <View style = {styles.container}>
            <View>
            <Input
                editable
                style={{ height: 40, width: 200, borderColor: 'black', borderWidth: 1 }}
                placeholder='Type your password'
                handleChanges={this.handlePasswordChanges}
                value={this.props.password}
                type = "password"
              />
            </View>
            <View >
            <strong> Password strength : </strong>
            </View>
        </View>
   );
   }
}
  //    <input autoComplete="off" type="password" onChange={e => this.setState({ password: e.target.value })} />
  //  <PasswordInput password={password} />
const styles = StyleSheet.create({
  container: {
    width : "300px",
    alignItems: "center"
  },

})
