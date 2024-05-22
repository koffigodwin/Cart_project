import React from 'react'
import {useDispatch} from 'react-redux'
import { ModelClose ,ModelOpen } from './Store/modelslice'
import { Clearcart } from './Store/cartslice'




const Model = () => {
    const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove all items from your shopping cart?</h4>
        <div className='btn-container'>
          <button type='button' className='btn confirm-btn'
           onClick={() =>{dispatch(Clearcart()) 
            dispatch(ModelClose())
           }}
          > confirm</button>
          <button type='button' className='btn clear-btn'
          onClick={() => dispatch(ModelClose())}
          >cancel</button>
        </div>
      </div>
    </aside>
  )
}

export default Model