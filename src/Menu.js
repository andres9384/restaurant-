import React from 'react';

const Menu = ({items}) => {
  return <div className='section-center'>
      {items.map((restaurants)=>{
          const {id,name,category,price,img,description }  =restaurants;
          return (<article key={id} className='menu-item'>
              <img src={img} alt={name}  className='photo'/>
              <div className='items-info'>
                  <header>
                      <h4>{name}</h4>
                      <h4 className="price">{price}</h4>
                  </header>
                  <p className='item-text'>{description}</p>
              </div>
          </article>) 
      })}

      Component Menu
  </div>;
};

export default Menu;
