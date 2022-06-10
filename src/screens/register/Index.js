import {TouchableOpacity, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import Input from '../../component/Input';
import {COLORS} from '../../helpers/colors';
import styles from './styles';
import Button from '../../component/Button';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {myDB} from '../../helpers/api';
import {setDataUser} from './redux/action';
import {useDispatch} from 'react-redux';

const Index = ({navigation}) => {
  const dispatch = useDispatch();

  const emailSignIn = async values => {
    try {
      const res = await auth().createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
      const payload = {
        email: values.email,
        password: values.password,
        _id: res.user.uid,
        bag: [],
      };
      await myDB.ref(`users/${res.user.uid}`).set(payload);
      console.log(res.user.uid);
      dispatch(setDataUser(res.user.uid));
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert(error);
    }
  };

  const signUpSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter proper Email Address!')
      .required('Email is a required field'),
    password: Yup.string()
      .required('Password field is Required')
      .min(8, 'Password is too short, should be at least 8 character'),
  });

  return (
    <Formik
      validationSchema={signUpSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={emailSignIn}>
      {({handleChange, handleSubmit, values}) => {
        return (
          <View style={styles.container}>
            <Input
              textContainType="emailAddress"
              placeholder="Email"
              placeholderTextColor={COLORS.white}
              onChangeText={handleChange('email')}
              value={values.email}
              // error={props.errors.email}
            />
            <Input
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={COLORS.white}
              value={values.password}
              onChangeText={handleChange('password')}
              // error={props.errors.password}
            />
            <Button
              backgroundColor={COLORS.white}
              width={100}
              top={70}
              left={215}
              height={40}
              borderRadius={14}
              marginTop={0}
              text="Next"
              onPress={handleSubmit}
            />
            <TouchableOpacity style={styles.termsAndPolicys}>
              <Text style={styles.terms}> Term and Condition </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.termsAndPolicys}>
              <Text style={styles.privacy}> Privacy Policy </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  );
};

export default Index;
