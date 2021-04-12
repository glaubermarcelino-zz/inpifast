import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
// import { SvgUri } from "react-native-svg";
import GeneralStatusBarColor from '../../components/StatusbarColor/Index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header/Index';
import SearchBar from '../../components/SearchBar/Index';

const Home = () => {
  const [selectedItems, setselectedItems] = useState<number[]>([]);
  const navigation = useNavigation();

  function handleNavigateBack() {
    Alert.alert('Oooops...', 'Funcionalidade de retorno acionada');
  }
  function handleNavigate() {
    Alert.alert('Oooops...', 'Funcionalidade de Navegação acionada');
  }

  return (
    <>
      <View>
        <GeneralStatusBarColor
          backgroundColor="#155BCB"
          barStyle="light-content"
        />
        <Header titulo={'Olá, Glauber Marcelino'} />
        {/* <SearchBar/> */}
      </View>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.servicos}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <TouchableOpacity
                style={[styles.item]}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/icons/novo-pedido.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Novo Pedido</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/icons/meus-pedidos.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Meus Pedidos</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/busca.png')} />
                </View>
                <Text style={styles.itemTitle}>Busca</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate('Pagamentos')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/icons/consulta-publica.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Consulta Pública</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/icons/classificacao.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Classificação</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate('Credito')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/icons/custos-pagamentos.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Custos e Pagamento</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/duvidas.png')} />
                </View>
                <Text style={styles.itemTitle}>Dúvidas</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate('FundoReserva')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/sebrae.png')} />
                </View>
                <Text style={styles.itemTitle}>
                  Trilhas do Conhecimento
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/icons/legislacao.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Legislação</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/icons/recursos-utilidades.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Recursos e Utilidades</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => handleNavigate()}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image
                    source={require('../../assets/icons/guia-basico.png')}
                  />
                </View>
                <Text style={styles.itemTitle}>Guia Básico</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.item]}
                onPress={() => navigation.navigate('Utilidades')}
                activeOpacity={0.6}>
                <View
                  style={{
                    justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    flexDirection: 'row',
                    width: '100%',
                  }}>
                  <Image source={require('../../assets/icons/alertas.png')} />
                </View>
                <Text style={styles.itemTitle}>Alerta contra Fraudes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
  },
  servicos: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 0,
  },
  welcome: {color: '#305F95', fontSize: 16, margin: 10, fontWeight: 'bold'},
  instructions: {},
  logo: {
    justifyContent: 'flex-end',
    width: 94,
    height: 40,
  },
  item: {
    backgroundColor: '#F1F1F1',
    borderWidth: 1,
    borderColor: '#305F95',
    height: 117,
    width: 140,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },
  itemSaldoDisponivel: {
    backgroundColor: '#305F95',
    borderWidth: 1,
    borderColor: '#305F95',
    height: 117,
    width: 140,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },
  itemExtrato: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#305F95',
    height: 90,
    width: 147,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },
  itemFundoReserva: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#305F95',
    height: 90,
    width: 147,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },
  itemCashBack: {
    backgroundColor: '#FE6C6D',
    borderWidth: 1,
    borderColor: '#FE6C6D',
    height: 90,
    width: 147,
    borderRadius: 8,
    paddingTop: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: 'column',
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#305F95',
  },
  itemTitleSaldoCashBack: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  itemTitleSecond: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#979797',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Home;
