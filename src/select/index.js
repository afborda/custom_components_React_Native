/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

// import { Container } from './styles';

const CustomSelect = ({options, value, setValue, ...props}) => {
  return (
    <View>
      <Picker
        selectedValue={value}
        style={{height: 50, width: 300}}
        onValueChange={(itemValue, itemIndex) =>
          setValue({label: itemValue, value: itemIndex})
        }>
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
};

export default CustomSelect;
