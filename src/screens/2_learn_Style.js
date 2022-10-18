import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, Linking} from 'react-native';

export const Learn2 = () => {
  const [name, setName] = useState('Style Test');

  const onClicHandler = () => {
    setName('Style Test is Done!');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.button}>
        <Button title="Next" onPress={onClicHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: ' 50%',
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 20,
    borderColor: '#ff00ff',
    borderRadius: 20,
    margin: 40,
  },
  text: {
    color: '#000',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    // fontSize: 20,
  },
  button: {
    width: 200,
    height: 60,
  },
});
