import { FaCartPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { amount } = useSelector((item) => item.cart)
  return (
    <nav>
      <div className='nav-center'>
        <h4>redux toolkit</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
