import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { Increase , Decrease, RemoveItem } from './Store/cartslice';


const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={() => dispatch(RemoveItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => dispatch(Increase({id}))}>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => dispatch(Decrease({id}))}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
