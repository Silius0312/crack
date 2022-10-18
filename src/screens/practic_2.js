import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, Linking} from 'react-native';

import {Learn1} from './src/screens/1_learn_State';
import {Learn2} from './src/screens/2_learn_Style';
import {Learn3} from './src/screens/3_learn_optimization';
import {Clicked} from './src/screens/practic_1';
import {Practic2} from './src/screens/practic_2';

const App = () => {
  return (
    <View style={styles.view}>
      <View style={styles.view123}>
        <View style={styles.view1}>
          <Text>1</Text>
        </View>
        <View style={styles.view2}>
          <Text>2</Text>
        </View>
        <View style={styles.view3}>
          <Text>3</Text>
        </View>
      </View>
      <View style={styles.view45}>
        <View style={styles.view4}>
          <Text>4</Text>
        </View>
        <View style={styles.view5}>
          <Text>5</Text>
        </View>
      </View>
      <View style={styles.view67}>
        <View style={styles.view6}>
          <Text>6</Text>
        </View>
        <View style={styles.view7}>
          <Text>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view1: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0fff',
  },
  view2: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0ff0',
  },
  view3: {
    flex: 1,

    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    flexDirection: 'column',

    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    backgroundColor: '#00ff0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,

    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view123: {
    flex: 0.15,
    flexDirection: 'row',
  },
  view45: {
    flex: 0.2,
    flexDirection: 'column',
  },
  view67: {
    flex: 1,
    flexDirection: 'row',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 40,
//   },
// });

export default App;
