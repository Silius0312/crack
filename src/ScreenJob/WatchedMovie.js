import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Modal, Button} from 'react-native-paper';

export const WatchedMovie = ({navigation}) => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const onPresHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setVisible(true);
    }
  };

  return (
    <View style={styles.body}>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <Text>Имя короче трех символов</Text>
        <Button style={{marginTop: 30}} onPress={hideModal} />
      </Modal>
      <Text style={styles.text}>Назови свое имя смертный!!! </Text>
      <TextInput
        style={styles.input}
        placeholder="Введите имя"
        onChangeText={value => setName(value)}
      />
      {/* <Button
        title={submitted ? 'Скрыть' : 'Ввод'}
        onPress={onPresHandler}
        color="#00f"
      /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={onPresHandler}
        activeOpacity={0.6}>
        <Text style={styles.text}>{submitted ? 'Скрыть' : 'Продолжить'}</Text>
      </TouchableOpacity>
      {submitted ? (
        <Text style={styles.text}> Раб ты назвал себя {name} ?</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    borderBottomLeftRadius: 5,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f0f',
  },
});
