import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {addMovie} from '../redux/GalleryMovie';

// переменная для добавления фильма с тхт инпутом
export const Home = ({navigation}) => {
  const [movie, setMovie] = useState();
  const getRandomInt = max => {
    return Math.floor(Math.random() * max);
  };
  // создаем фильм с уникальном ИД
  const newMovie = {
    id: getRandomInt(999999999),
    name: movie,
  };
  const dispatch = useDispatch();

  return (
    <View>
      <TextInput
        autoCorrect="false"
        autoFocus="true"
        // clearTextOnFocus="true"
        clearButtonMode="always"
        style={styles.input}
        onChangeText={setMovie}
        value={movie}
        placeholder="Введите название фильма"
      />

      <Button
        title="Добавить фильм"
        onPress={() => dispatch(addMovie(newMovie))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
