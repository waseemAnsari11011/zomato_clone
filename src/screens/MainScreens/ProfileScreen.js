import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {logout} from '../../config/redux/actions/authActions';
import {clearCart} from '../../config/redux/actions/cartActions';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      dispatch(clearCart());
      dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>John Doe</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={20} color="#FFC107" />
            <Text style={styles.rating}>4.8</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.section}>
          <Icon name="person" size={20} color="#333" />
          <Text style={styles.sectionText}>Edit Profile</Text>
        </View>
        <View style={styles.section}>
          <Icon name="location" size={20} color="#333" />
          <Text style={styles.sectionText}>Addresses</Text>
        </View>
        <View style={styles.section}>
          <Icon name="card" size={20} color="#333" />
          <Text style={styles.sectionText}>Payment Methods</Text>
        </View>
        <View style={styles.section}>
          <Icon name="settings" size={20} color="#333" />
          <Text style={styles.sectionText}>Settings</Text>
        </View>
        <View style={styles.section}>
          <Icon name="information-circle" size={20} color="#333" />
          <Text style={styles.sectionText}>About Us</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  avatarContainer: {
    backgroundColor: '#fff',
    borderRadius: 100,
    padding: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  infoContainer: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#fff',
  },
  body: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#F44336',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
