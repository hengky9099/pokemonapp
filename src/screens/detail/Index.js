import {ScrollView, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {baseUrl} from '../../helpers/api';
import axios from 'axios';
import DetailCard from '../../component/DetailCard';
import styles from './styles';
import SpeciesCard from '../../component/SpeciesCard';
import AbilitiesCard from '../../component/AbilitiesCard';
import Button from '../../component/Button';

const Index = ({navigation, route}) => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');
  const [color, setColor] = useState('');
  const [desc, setDesc] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [abilities1, setAbilities1] = useState('');
  const [abilities2, setAbilities2] = useState('');

  useEffect(() => {
    getDataFromDashboard();
    getPokemonTypeData();
    getPokemonColor();
  });

  const getDataFromDashboard = async () => {
    try {
      const results = await axios.get(
        `${baseUrl}/pokemon/${route.params.cardData}`,
      );
      setPhoto(results.data.sprites.front_default);
      setName(results.data.name);
      setNumber(results.data.id);
      setHeight(results.data.height);
      setWeight(results.data.weight);
      setAbilities1(results.data.abilities[0].ability.name);
      if (results.data.abilities[1]) {
        setAbilities2(results.data.abilities[1].ability.name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonTypeData = async () => {
    try {
      const results = await axios.get(
        `${baseUrl}/pokemon-form/${route.params.cardData}`,
      );
      setType1(results.data.types[0].type.name);
      if (results.data.types[1]) {
        setType2(results.data.types[1].type.name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonColor = async () => {
    try {
      const results = await axios.get(
        `${baseUrl}/pokemon-species/${route.params.cardData}`,
      );
      setDesc(results.data.flavor_text_entries[0].flavor_text);
      setColor(results.data.color.name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={[styles.container, {backgroundColor: color}]}>
      <DetailCard
        photo={photo}
        name={name}
        type1={type1}
        type2={type2}
        number={number}
        backgroundColor={color}
      />
      <SpeciesCard desc={desc} weight={weight} height={height} />
      <AbilitiesCard abilities1={abilities1} abilities2={abilities2} />
      <Button
        marginTop={20}
        top={0}
        width={240}
        left={50}
        height={40}
        borderRadius={10}
        backgroundColor="white"
        text={'Catch!'}
        onPress={() => navigation.navigate('Bag')}
      />
    </ScrollView>
  );
};

export default Index;
