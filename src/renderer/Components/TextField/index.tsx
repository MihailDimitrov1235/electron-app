/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */

import React from 'react';
import NumberTextfield from './NumberTextField';
import StringTextfield from './StringTextField';
import TextArea from './TextArea';

export type TextFieldPropsType = {
  title: string;
  onChange: (value: string) => void;
  value: string;
  number?: {
    min: number;
    max: number;
    digitsAfterDecimal: number;
  };
  textarea?: {
    rows: number;
  };
  className?: string;
  endElement?: React.JSX.Element;
};

function TextField(props: TextFieldPropsType) {
  if (props.number) {
    return <NumberTextfield {...props} />;
  }
  if (props.textarea) {
    return <TextArea {...props} />;
  }
  return <StringTextfield {...props} />;
}

export default TextField;
