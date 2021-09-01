import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import reducer from "./reducer";
import {createStore} from 'redux'
import {Provider} from "react-redux";
const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
