import React, { createContext, useReducer } from 'react';
import listingReducer from './listingReducer';

const initialState = {
  cardListings: [
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
  ],
  wishList: [],
};

// Create context
export const ListingContext = createContext(initialState);

// Provider component
export const ListingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listingReducer, initialState);

  return (
    <ListingContext.Provider
      value={{
        cardListings: state.cardListings,
      }}>
      {children}
    </ListingContext.Provider>
  );
};
