import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Card = ({title, image, onPress, price}) => {
  console.log('link-', image);
  return (
    <View style={styles.card}>
      <ImageBackground
        source={image ? {uri: image} : require('../assets/images/food2.jpeg')}
        style={styles.image}>
        <View style={styles.imageOverlay} />

        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.text}>${price}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 250,
  },
  image: {
    height: 200,
    resizeMode: 'cover',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  icon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  content: {
    padding: 20,
    backgroundColor: '#FFF',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 19,
    fontWeight: '700',
  },
});

export default Card;
