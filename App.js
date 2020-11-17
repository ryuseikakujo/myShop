import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import ShopNavigator from './navigation/ShopNavigator'

import ProductsReducer from './store/reducers/products'

const rootReducer = combineReducers({
  products: ProductsReducer,
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  )
}
