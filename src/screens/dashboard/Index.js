import {FlatList, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import Card from '../../component/Card';
import styles from './styles';
import axios from 'axios';
import {baseUrl} from '../../helpers/api';

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
