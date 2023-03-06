import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from '../../config/redux/actions/cartActions';
import Feather from 'react-native-vector-icons/Feather';

const OrdersScreen = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  const dispatch = useDispatch();

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleIncreaseQuantity = index => {
    dispatch(increaseQuantity(index));
  };

  const handleRemoveItem = id => {
    dispatch(removeItem(id));
  };

  const handleDecreaseQuantity = index => {
    dispatch(decreaseQuantity(index));
  };

  const totalPrice = cartItems?.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  console.log('cartItems-->', cartItems);

  const renderCartItem = ({item, index}) => {
    return (
      <View style={styles.cartItem}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.quantity}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDecreaseQuantity(index)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleIncreaseQuantity(index)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Feather
            name={'delete'}
            size={20}
            color={'red'}
            onPress={() => handleRemoveItem(item.id)}
          />
        </View>
      </View>
    );
  };

  const renderEmptyCart = () => {
    return (
      <View style={styles.emptyCart}>
        <Text style={styles.emptyCartText}>Your cartItems is empty</Text>
      </View>
    );
  };

  const placeOrder = () => {
    // logic for placing order goes here
  };

  console.log('cartItems==>', cartItems);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', backgroundColor: '#f8f8f8'}}>
      <View style={styles.container}>
        {cartItems?.length > 0 ? (
          <View style={styles.cartList}>
            <FlatList
              data={cartItems}
              renderItem={renderCartItem}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.placeOrderButton}
              onPress={placeOrder}>
              <Text style={styles.placeOrderButtonText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        ) : (
          renderEmptyCart()
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cartList: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
  },
  price: {
    fontSize: 15,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  button: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    width: 30,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 20,
  },
  placeOrderButton: {
    backgroundColor: '#1abc9c',
    borderRadius: 10,
    paddingVertical: 15,
  },
  placeOrderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OrdersScreen;
