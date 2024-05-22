import React from 'react';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { CalculationTotal } from './Store/cartslice';
import Model from './Model';

function App() {
  const CartItems = useSelector((state) => state.cart)
  const { IsOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  
  useEffect(() =>{
     dispatch(CalculationTotal())
  },[CartItems])
  return (
    <main>
      {IsOpen && <Model />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
