import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Card from '../../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../config/redux/actions/cartActions';
import {fetchRecords} from '../../config/redux/actions/recordActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {loading, records, error} = useSelector(state => state.records);

  useEffect(() => {
    dispatch(fetchRecords());
  }, [dispatch]);

  const foodList = [
    {
      id: 1,
      title: 'Card 1',
      image: require('../../assets/images/food4.jpeg'),
      price: 10,
    },
    {
      id: 2,
      title: 'Card 2',
      image: require('../../assets/images/food4.jpeg'),
      price: 20,
    },
    {
      id: 3,
      title: 'Card 3',
      image: require('../../assets/images/food4.jpeg'),
      price: 30,
    },
  ];
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{error}</Text>
      </View>
    );
  }
  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {records.map((item, index) => (
          <View
            key={index}
            style={{marginBottom: index === foodList.length - 1 ? 100 : 20}}>
            <Card
              title={item.title}
              image={item.image}
              price={item.price}
              onPress={() => handleAddToCart(item)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
