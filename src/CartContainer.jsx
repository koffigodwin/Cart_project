import CartItem from './CartItem';

import { useSelector, useDispatch } from 'react-redux';
import { ModelOpen } from './Store/modelslice';


const CartContainer = () => {
  const {cartiems, total, amount} = useSelector((items) => items.cart)
  
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartiems.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>${total.toFixed(2)}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={() =>{
            dispatch(ModelOpen())
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
