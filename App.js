import React from 'react';
import ListingScreen from './app/screens/ListingScreen';

import { ListingProvider } from './app/context/listingContext';

export default function App() {
  return (
    <ListingProvider>
      <ListingScreen />
    </ListingProvider>
  );
}
