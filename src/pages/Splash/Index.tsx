import React from 'react';
import {View, Image, Text} from 'react-native';
import {StatusBar} from 'react-native';

import {Container} from './styles';

export default class Splash extends React.Component {
  render() {
    //Oculta a barra de status
    StatusBar.setHidden(true);
    return (
      <Container>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Image
            style={{
              width: 499,
              height: 225,
              alignSelf: 'center',
              marginLeft: 65,
              marginBottom: 10,
            }}
            source={require('../../assets/images/logo_branco374x184.png')}
          />
          <Text style={{color: '#fff'}}>Registro de Marcas e Patentes</Text>
        </View>
      </Container>
    );
  }
}
