import React, { Component } from 'react';
import {  Text, View, Image, Button, StyleSheet, Alert, TouchableOpacity ,TextInput } from 'react-native';
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
         <Text>
         <View style = {styles.container}>
            <View>
            <Text>
             <h1> Password strength meter </h1>
             </Text>
            </View>
            <View >
            <PasswordInput
                 value={this.props.password}
                 handleChanges={this.handlePasswordChanges}
              />
            </View>
        </View>
        </Text>
   );
   }
}
const styles = StyleSheet.create({
  container: {
    width : "500px",
    alignItems: "center"
  },

})
