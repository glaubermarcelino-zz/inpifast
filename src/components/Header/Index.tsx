import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Container} from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo_azul134x41.png')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 150,
    marginBottom: 5,
    width: 414,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});

export default Header;
