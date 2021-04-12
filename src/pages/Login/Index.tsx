import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Container, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

import {withFormik} from 'formik';

const Login = (props: any) => {
  const navigation = useNavigation();
  function handleNavigateToNewAccount() {
    navigation.navigate('Cadastro');
  }
  function handleNavigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.container}>
          <View>
          <Image
              style={styles.logoinpi}
              source={require('../../assets/images/logo_azul168x55.png')}
            />
            <Title style={styles.titulo}>Acesse sua conta com</Title>
            <Image
              style={styles.logo}
              source={require('../../assets/images/sua_conta230x194.png')}
            />
            <Title style={styles.titulo}>Número do CPF</Title>
            <Text style={styles.label}>CPF</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              value={props.values.cnpj}
              onChangeText={text => props.setFieldValue('cnpj', text)}
            />
            {/* <Text style={styles.label}>Senha:</Text>
            <TextInput
              keyboardType="visible-password"
              style={styles.input}
              value={props.values.senha}
              onChangeText={text => props.setFieldValue('senha', text)}
            /> */}
            <Text style={styles.avisoSenha}>Esqueceu sua senha?</Text>
            <RectButton
              style={styles.button}
              // onPress={props.handleSubmit}>
              onPress={() => handleNavigateToHome()}>
              <Text style={styles.buttonText}>Avançar</Text>
            </RectButton>
            <View style={styles.criarConta}>
              <TouchableOpacity onPress={() => handleNavigateToNewAccount()}>
                <Text style={{fontSize: 16, color: '#155BCB'}}>
                  Novo ?
                  <Text style={{color: '#FE6C6D', fontSize: 16, marginLeft: 2}}>
                    Crie uma conta agora
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    height: '100%',
  },
  titulo: {
    fontSize: 16,
    color: '#155BCB',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    color: '#155BCB',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#155BCB',
    fontWeight: 'bold',
  },
  criarConta: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    width: 230,
    height: 194,
    alignSelf: 'center',
    marginBottom: 40,
  },
  logoinpi: {
    width: 168,
    height: 55,
    alignSelf: 'center',
    marginBottom: 40,
  },
  avisoSenha: {fontSize: 16, color: '#FFEEE5', marginBottom: 10},
  submit: {},
  button: {
    backgroundColor: '#155BCB',
    height: 50,
    width:164,
    flexDirection: 'row',
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent:'flex-end',
    alignItems: 'center',
    
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});
export default withFormik({
  mapPropsToValues: () => ({cnpj: '', senha: ''}),

  handleSubmit: values => {
    // navigation.navigate('Home');
    console.log(values);
  },
})(Login);
