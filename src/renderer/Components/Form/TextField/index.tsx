/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */

import React, { forwardRef } from 'react';
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
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldPropsType
>((props, ref) => {
  if (props.number) {
    return (
      <NumberTextfield {...props} ref={ref as React.Ref<HTMLInputElement>} />
    );
  }
  if (props.textarea) {
    return <TextArea {...props} ref={ref as React.Ref<HTMLTextAreaElement>} />;
  }
  return (
    <StringTextfield {...props} ref={ref as React.Ref<HTMLInputElement>} />
  );
});

export default TextField;
