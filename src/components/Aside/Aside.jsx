import React from 'react'
import './Aside.css'

function Aside() {
  return (
    <div className='aside'>
      <div className='aside-options'>
        <div className='aside-heading'>
          <div className='bold'>
            <i className='fas fa-sort-amount-down pad-r-xs'></i>
            Sort By
          </div>
          <button className='secondary-button xs-button'>Clear All</button>
        </div>
        <div className='aside-heading--options'>
          <label>
            <input
              className='aside-input'
              type='radio'
              name='sort'
              // onChange={() =>
              //   dispatch({ type: 'SORT', payload: 'PRICE_HIGH_TO_LOW' })
              // }
              // checked={sortBy && sortBy === 'PRICE_HIGH_TO_LOW'}
            />
            Price: High to Low
          </label>
          <label>
            <input
              className='aside-input'
              type='radio'
              name='sort'
              // onChange={() =>
              //   dispatch({ type: 'SORT', payload: 'PRICE_HIGH_TO_LOW' })
              // }
              // checked={sortBy && sortBy === 'PRICE_HIGH_TO_LOW'}
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
              // checked={showInventoryAll}
              // onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
            />
            In stock only
          </label>
          <label>
            <input
              className='aside-input'
              type='checkbox'
              // checked={showInventoryAll}
              // onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
            />
            New Arrivals
          </label>
        </div>
      </div>
      <div className='aside-options'>
        <div className='aside-heading'>
          <div className='bold'>
            <i className='fas fa-filter pad-r-xs'></i>Filters By Brand
          </div>
        </div>
        <div className='aside-heading--options'>
          <label>
            <input
              className='aside-input'
              type='checkbox'
              // checked={showInventoryAll}
              // onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
            />
            Optimum Nutrition
          </label>
          <label>
            <input
              className='aside-input'
              type='checkbox'
              // checked={showInventoryAll}
              // onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
            />
            Ultimate Nutrition
          </label>
          <label>
            <input
              className='aside-input'
              type='checkbox'
              // checked={showInventoryAll}
              // onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
            />
            Muscleblaze
          </label>
          <label>
            <input
              className='aside-input'
              type='checkbox'
              // checked={showInventoryAll}
              // onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
            />
            MyProtein
          </label>
        </div>
      </div>
    </div>
  )
}

export default Aside
