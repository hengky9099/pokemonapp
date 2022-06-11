import {StyleSheet, FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import Card from '../../component/Card';
import {myDB} from '../../helpers/api';
import {useSelector} from 'react-redux';

const Index = () => {
  const {_user} = useSelector(state => state.user);

  useEffect(() => {
    showPokemonBag();
  });

  const showPokemonBag = async () => {
    const ref = await myDB.ref(`bag/${_user}`).once('value');
    console.log(ref);
    return ref;
  };

  const renderItem = ({item}) => (
    <Card name={item.name} navigation={navigation} />
  );

  return (
    <View>
      <FlatList
        style={styles.flatlistcontainer}
        data={showPokemonBag}
        renderItem={renderItem}
        initialNumToRender={1}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
