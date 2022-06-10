import {FlatList, Text, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import Card from '../../component/Card';
import styles from './styles';
import axios from 'axios';
import {baseUrl} from '../../helpers/api';
import Button from '../../component/Button';
import {COLORS} from '../../helpers/colors';

const Index = ({navigation}) => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPokemonData();
  }, [currentPage]);

  const getPokemonData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${baseUrl}/pokemon?offset=${currentPage}&limit=10`,
      );
      setPokemon([...pokemon, ...res.data.results]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => (
    <Card name={item.name} navigation={navigation} />
  );

  const loadMoreItem = useCallback(() => {
    setCurrentPage(currentPage + 10);
  }, [currentPage]);

  const renderLoader = () => {
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} />
      </View>
    ) : null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar} elevation={3}>
        <Text style={styles.textNavbar}>Hengky's Pokedex</Text>
        <Button
          style={styles.button}
          marginTop={20}
          top={-20}
          width={100}
          left={250}
          height={40}
          borderRadius={10}
          backgroundColor={COLORS.white}
          text={'Pokebag'}
          onPress={() => navigation.navigate('Bag')}
        />
      </View>
      <FlatList
        style={styles.flatlistcontainer}
        data={pokemon}
        renderItem={renderItem}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        initialNumToRender={1}
      />
    </View>
  );
};

export default Index;
