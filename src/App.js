import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routes/Index';
import CodePush from 'react-native-code-push';

const codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_START};

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default CodePush(codePushOptions)(App);

const styles = StyleSheet.create({});
