import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const AppTextInput = ({
  handleChange,
  handleIconClick,
  iconClick,
  value,
  setValue,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleIconClick}>
        <MaterialCommunityIcons
          name={iconClick ? 'cards-heart' : 'heart-outline'}
          size={30}
          color="red"
        />
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        placeholder="Search Here"
        onChangeText={handleChange}
        value={value}
      />
      <TouchableOpacity onPress={() => setValue('')}>
        <MaterialCommunityIcons name="close" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  textInput: {
    width: '85%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
    fontSize: 17.5,
    borderColor: colors.white,
  },
});

export default AppTextInput;
