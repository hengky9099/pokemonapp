import {firebase} from '@react-native-firebase/database';

export const myDB = firebase
  .app()
  .database(
    'https://pokemon-c1fa3-default-rtdb.asia-southeast1.firebasedatabase.app/',
  );

export const webClientId =
  '256615511290-ticq00b1auc3mdsr31kqufpucjdso4h1.apps.googleusercontent.com';

export const baseUrl = 'https://pokeapi.co/api/v2/';
