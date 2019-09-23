import React, { useState } from 'react';

import { CheckBoxStyle } from './CheckStyled'
const CheckBox = props => {
  const { value, name, checked } = { ...props };
  console.log("valuee--", value)
  return <CheckBoxStyle><input type='checkbox' value={value} checked />
    <lable>{name}</lable>
  </CheckBoxStyle>
}
export { CheckBox }