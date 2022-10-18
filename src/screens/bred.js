import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

export const Hello = () => {
  const [Name, setName] = useState();

  return (
    <View>
      <TextInput
        placeholder="Введите Имя"
        onChangeText={setName}
        value={Name}
      />
      <Text>  </Text>
    </View>
  );
};
