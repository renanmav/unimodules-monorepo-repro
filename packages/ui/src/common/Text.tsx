import React from 'react';
import {Text as NativeText, TextProps} from 'react-native';

const Text: React.FC<TextProps> = ({children, ...props}) => {
  return <NativeText {...props}>{children}</NativeText>;
};

export default Text;
