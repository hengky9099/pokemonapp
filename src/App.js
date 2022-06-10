import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routes/Index';
import CodePush from 'react-native-code-push';
import {store, Persistor} from './store/Index';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_START};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={Persistor}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default CodePush(codePushOptions)(App);

const styles = StyleSheet.create({});
