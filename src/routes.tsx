import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Pedido from './pages/Pedido/Index';
import Login from './pages/Login/Index';
import Pagamentos from './pages/Pagamentos/Index';
import Historico from './pages/Historico/Index';
import Home from './pages/Home/Index';
import Splash from './pages/Splash/Index';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        initialRouteName="Login"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#155BCB',
          },
        }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Pedido" component={Pedido} />
        <AppStack.Screen name="Historico" component={Historico} />
        <AppStack.Screen name="Pagamentos" component={Pagamentos} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
