import React, {useState} from 'react';
import {Button, SafeAreaView, Text, StyleSheet} from 'react-native';

export const Clicked = () => {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(0);

  const onClickHandle = () => {
    setCount(count + 5);
    setClick(click + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="добавить" onPress={() => onClickHandle(count + 5)} />
      <Text style={styles.text}>Ты нажал добавить {click}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontStyle: 'italic',
    margin: 10,
    fontSize: 20,
  },
});
