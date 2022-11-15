import React, { useState } from 'react'
import "./resturant.css"
import Menu from './menuapi'
import MenuCard from './MenuCard'

const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const filteritem = (category) => {
    const updatelist = Menu.filter((curElem) =>{
      return curElem.category === category;

    })
    setmenuData(updatelist);
  };
  return ( 
    <div>
      <nav className='navbar'>
        <div className='btn-group'>
          <button className='btn-group__item'
           onClick={() => filteritem("breakfast")}>
            Breakfast
            </button>
          <button className='btn-group__item' onClick={() => filteritem("lunch")}>Lunch</button>
          <button className='btn-group__item' onClick={() => filteritem("evening")}>Evening</button>
          <button className='btn-group__item' onClick={() => filteritem("dinner")}>Dinner</button>
          <button className='btn-group__item 'onClick={() => setmenuData(Menu)}>All</button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
      
    </div>
  )
}

export default Resturant;