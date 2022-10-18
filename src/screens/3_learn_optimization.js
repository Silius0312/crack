import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, Linking} from 'react-native';

export const Learn3 = () => {
  const [name, setName] = useState('Style Test');

  const onClicHandler = () => {
    setName('Style Test is Done!');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 0.5,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontStyle: 'italic',
    fontSize: 20,
  },
  button: {
    width: 200,
    height: 60,
  },
});
