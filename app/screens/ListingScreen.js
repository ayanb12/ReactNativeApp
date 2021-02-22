import React, { useState } from 'react';
import { StyleSheet, FlatList, TextInput } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import AppTextInput from './../components/AppTextInput';

const cardListings = [
  {
    id: 1,
    name: 'JW Marriot',
    address: 'Akshya Nagar 1st Block 1st Cross',
    rating: 5,
    state: 'restaurant',
    image: require('../assets/pexels-life-of-pix-67468.jpg'),
  },
  {
    id: 2,
    name: 'Hyatt Regency',
    address: '81 High Noon Dr. Easley, SC 29640',
    rating: 3,
    state: 'restaurant',
    image: require('../assets/pexels-jonathan-borba-2983101.jpg'),
  },
  {
    id: 3,
    name: 'BBQ Kitchen',
    address: '59416 Friesen Valley Suite 306',
    rating: 4,
    state: 'restaurant',
    image: require('../assets/pexels-denys-gromov-6427704.jpg'),
  },
  {
    id: 5,
    name: 'Zuni Café',
    address: 'C 65 Sector 9',
    rating: 2,
    state: 'cafe',
    image: require('../assets/pexels-jaymantri-2755.jpg'),
  },
  {
    id: 4,
    name: 'Novotel',
    address: '59416 Friesen Valley Suite 306',
    rating: 5,
    state: 'restaurant',
    image: require('../assets/pexels-snapwire-675951.jpg'),
  },
  {
    id: 6,
    name: 'Cafe Coffee Day',
    address: 'Akshya Nagar 1st Block 1st Cross',
    rating: 4,
    state: 'cafe',
    image: require('../assets/pexels-pixabay-531639.jpg'),
  },
];

const ListingScreen = () => {
  const [value, setValue] = useState('');
  const [iconClick, setIconClick] = useState(false);

  const handleChange = (text) => {
    setValue(text);
  };

  const handleIconClick = () => {
    setIconClick(!iconClick);
  };

  return (
    <Screen style={styles.screen}>
      <AppTextInput
        handleChange={handleChange}
        handleIconClick={handleIconClick}
        iconClick={iconClick}
        setValue={setValue}
        value={value}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cardListings}
        keyExtractor={(cardListing) => cardListing.id.toString()}
        renderItem={({ item }) => {
          if (
            item.name.toLowerCase().includes(value.toString().toLowerCase()) ||
            item.address.toLowerCase().includes(value.toString().toLowerCase())
          ) {
            return (
              <Card
                name={item.name}
                address={item.address}
                rating={item.rating}
                image={item.image}
                state={item.state}
              />
            );
          }
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.listingScreen,
  },
});

export default ListingScreen;
