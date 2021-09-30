import React from 'react'
import { useProducts } from '../../contexts/products-context'
import './Aside.css'

function Aside() {
  const { state, dispatch } = useProducts()
  return (
    <div className='aside'>
      <div className='aside-options'>
        <div className='aside-heading'>
          <div className='bold'>
            <i className='fas fa-sort-amount-down pad-r-xs'></i>
            Sort By
          </div>
          <button
            className='secondary-button xs-button'
            onClick={() => {
              dispatch({ type: 'RESET' })
            }}
          >
            Clear All
          </button>
        </div>
        <div className='aside-heading--options'>
          <label>
            <input
              className='aside-input'
              type='radio'
              name='sort'
              value={state.sortBy}
              onChange={() =>
                dispatch({ type: 'SORT', payload: 'PRICE_HIGH_TO_LOW' })
              }
              checked={state.sortBy && state.sortBy === 'PRICE_HIGH_TO_LOW'}
            />
            Price: High to Low
          </label>
          <label>
            <input
              className='aside-input'
              type='radio'
              name='sort'
              value={state.sortBy}
              onChange={() =>
                dispatch({ type: 'SORT', payload: 'PRICE_LOW_TO_HIGH' })
              }
              checked={state.sortBy && state.sortBy === 'PRICE_LOW_TO_HIGH'}
            />
            Price: Low to High
          </label>
        </div>
      </div>
      <div className='aside-options'>
        <div className='aside-heading'>
          <div className='bold'>
            <i className='fas fa-filter pad-r-xs'></i>Filters
          </div>
        </div>
        <div className='aside-heading--options'>
          <label>
            <input
              className='aside-input'
              type='checkbox'
              value={state.showOnlyFastDelivery}
              onChange={() => {
                dispatch({
                  type: 'TOGGLE_FAST_DELIVERY',
                  payload: !state.showOnlyFastDelivery,
                })
              }}
              checked={state.showOnlyFastDelivery}
            />
            Fast Delivery
          </label>
          <label>
            <input
              className='aside-input'
              type='checkbox'
              value={state.showOnlyNewStock}
              onChange={() =>
                dispatch({
                  type: 'TOGGLE_NEW_STOCK',
                  payload: !state.showOnlyNewStock,
                })
              }
              checked={state.showOnlyNewStock}
            />
            New Arrivals
          </label>
        </div>
      </div>

      {/* TO-DO: filters according to tags by company name */}
      {/* <div className='aside-options'>
        <div className='aside-heading'>
          <div className='bold'>
            <i className='fas fa-filter pad-r-xs'></i>Filters By Brand
          </div>
        </div>
        <div className='aside-heading--options'>
          <label>
            <input className='aside-input' type='checkbox' />
            Optimum Nutrition
          </label>
          <label>
            <input className='aside-input' type='checkbox' />
            Ultimate Nutrition
          </label>
          <label>
            <input className='aside-input' type='checkbox' />
            Muscleblaze
          </label>
          <label>
            <input className='aside-input' type='checkbox' />
            MyProtein
          </label>
        </div>
      </div> */}
    </div>
  )
}

export default Aside
