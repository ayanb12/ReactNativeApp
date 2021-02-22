import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

const Card = (props) => {
  const { name, address, rating, image, state } = props;

  return (
    <View style={styles.card}>
      <View style={styles.cardWrapper}>
        <Image style={styles.image} source={image} />

        <View style={styles.textWrapper}>
          <View style={styles.info}>
            <AppText style={styles.text1}>{name}</AppText>
            <View style={styles.groupIcon}>
              {Array(rating)
                .fill(rating)
                .map((item, idx) => (
                  <React.Fragment key={idx}>
                    <MaterialCommunityIcons
                      name="star"
                      size={24}
                      color="#40ff00"
                    />
                  </React.Fragment>
                ))}
            </View>
            <AppText style={styles.text3}>{address}</AppText>
          </View>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={state === 'cafe' ? 'coffee' : 'food'}
              size={32}
              color="#A6B5F9"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    marginHorizontal: 20,
    height: 350,
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 25,
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    width: '70%',
    paddingRight: 20,
  },
  text1: {
    color: colors.black,
    marginBottom: 5,
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: 1,
  },
  groupIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 4,
  },
  text3: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 15,
  },
  icon: {
    marginLeft: 30,
  },
});

export default Card;
