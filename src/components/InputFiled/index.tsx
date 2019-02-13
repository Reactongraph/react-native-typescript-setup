import React from 'react';
import { TextInput } from 'react-native';

const InputField: React.SFC<any> = props => (
    <TextInput
        { ...props}
        editable={true}
        returnKeyType='next'
        placeholderTextColor='rgba(225,225,225,0.7)'
        autoCorrect={false}
        autoCapitalize='none'
    />
);

export default InputField;
