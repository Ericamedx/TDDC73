//input here?
import React from 'react';

import {strengthIndicator} from './strength'

export default function PasswordInput(props){
//password req..

  const strength = strengthIndicator(props.value);

  return (
    <input
      type = 'password'
      //value = (props.value)
      className = 'password-input' />
  )
}
