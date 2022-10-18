import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Button,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {AntDesign} from '@expo/vector-icons';

import {useSelector} from 'react-redux';
import {Modal, Portal, Provider, TextInput} from 'react-native-paper';
import {Button as PaperButton} from 'react-native-paper';
import {deleteMovie} from '../redux/GalleryMovie';
import {sortFilms} from '../redux/GalleryMovie';

export const MovieLibrary = ({navigation}) => {
  const galleryMovie = useSelector(state => state.GalleryMovie.films);

  const dispatch = useDispatch();

  const renderItemFilms = ({item}) => {
    return (
      <View>
        <TouchableOpacity onPress={showModal}>
          <Text style={styles.item}>{item.name} </Text>

          {/* <Button
            title="Сортировать"
            style={styles.del}
            onPress={() => dispatch(sortFilms(item))}
          /> */}

          <Text>
            {/* <AntDesign name="delete" style={{color: 'red', fontSize: 50}} /> */}
            {/* onPress={() => dispatch(deleteMovie(item.id))} */}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const textModal = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };
  // sortFilms
  return (
    <View>
      <PaperButton
        title="Удалить фильм"
        onPress={() => dispatch(deleteMovie())}
      />
      {/* <PaperButton
        title="Сортировать фильм"
        onPress={() => dispatch(sortFilms()}
      /> */}
      <FlatList
        data={galleryMovie}
        keyExtractor={item => item.id}
        renderItem={renderItemFilms}
      />
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Text>Ты нажал на {textModal} фильм</Text>
          <PaperButton style={{marginTop: 30}} onPress={hideModal}>
            Скрыть
          </PaperButton>
          <PaperButton title="Ok" onPress={hideModal} />
        </Modal>
      </Portal>
    </View>

    /* <Text>Массив из списка фильмов</Text>
      <Text>Скорее всего FlatList</Text>
      <Text>добавление фильмов смотрел или нет</Text>

      <Text>2 или 3 кнопки</Text>

      <Text>Массив из списка фильмов</Text>
      <Text>Массив из списка фильмов</Text> */
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  del: {
    fontSize: 24,
    color: 'red',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  deledet: {},
});
