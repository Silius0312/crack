//  Что-то пошло не так,  потом надо допилить

import React, {useState} from 'react';
import {
  SectionList,
  FlatList,
  ScrollList,
  Text,
  View,
  StyleSheet,
  RefreshControl,
} from 'react-native';

export const Practics3 = () => {
  const [Sections, setSections] = useState([{name: 'Title 1'}]);

  const onRefresh = () => {
    setRefreshing(true);
    const adding_index = Sections.length + 1;
    setSections([
      ...Sections,
      {
        title: 'Title ' + adding_index,
        data: ['Item ' + adding_index + '-1', 'Item ' + adding_index + '-2'],
      },
    ]);

    setRefreshing(false);
  };

  const [Refreshing, setRefreshing] = useState(false);

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={Sections}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl refreshing={Refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  },
});
