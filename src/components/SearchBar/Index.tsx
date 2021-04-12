import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

interface propsSearchBar {
  placeHolder: string;
}

const SearchBar = (props: propsSeachBar) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'space-between',
          alignContent: 'space-between',
          flexDirection: 'row',
          height: 60,
          alignItems: 'center',
          padding: 10,
        }}>
        <Image source={require('../../assets/icons/busca.png')} />
        <TextInput
          placeholder={props.placeHolder}
          style={{color: '#828282', fontSize: 20}}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 60,
    marginTop: -15,
    backgroundColor: '#fff',
    borderTopColor: '#6E6F70',
    borderTopWidth: 0.5,
    position: 'relative',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
export default SearchBar;
