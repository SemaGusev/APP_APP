import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { createSelectorHook, Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ShopNavigator from './navigation/ShopNavigator';
import { createStackNavigator } from 'react-navigation-stack';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer)

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "roboto": require('./assets/Roboto/Roboto-Black.ttf'),
//     "roboto-bold": require('./assets/Roboto/Roboto-Bold.ttf')
// });
// }

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  // if(!fontLoaded) {
  //   return (
  //     <AppLoading 
  //     startAsync={fetchFonts}
  //     onFinish={() => {
  //       setFontLoaded(true)
  //     }}
  //     />
  //   )
  // }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
