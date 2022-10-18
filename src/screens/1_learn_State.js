import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet, Button, Linking} from 'react-native';

export const Learn1 = () => {
  const [name, setName] = useState('Alex');
  const [session, setSession] = useState({number: 6, title: 'state'});
  const [curent, setCurent] = useState(true);

  const onClicHandler = () => {
    setName('Programing with Mash');
    setSession({number: 7, title: 'Style'});
    setCurent(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>
        This is session number {session.number} and about {session.title}
      </Text>
      <Text style={styles.text}>
        {curent ? 'curent session' : 'next session'}
      </Text>
      <Button title="Next" onPress={onClicHandler} />
      <Button
        title="Переход на Youtube"
        onPress={() => {
          Linking.openURL('https://youtube.com');
        }}
      />
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
  },
});
