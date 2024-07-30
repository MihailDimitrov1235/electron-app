/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */

import React from 'react';
import NumberTextfield from './NumberTextField';
import StringTextfield from './StringTextField';

export type TextFieldPropsType = {
  title: string;
  onChange: (value: string) => void;
  value: string;
  number?: {
    min: number;
    max: number;
    digitsAfterDecimal: number;
  };
  className?: string;
  endElement?: React.JSX.Element;
};

function TextField(props: TextFieldPropsType) {
  if (props.number) {
    return <NumberTextfield {...props} />;
  }
  return <StringTextfield {...props} />;
}

export default TextField;
