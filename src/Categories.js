import React from 'react';

const Categories = ({category,categories}) => {
  return <div className='btn-container'>
      {category.map((category,index)=>{
          return(
            <button className='filter-btn' key={index} onClick={()=>categories(category)}>
          {category}</button>    
          )
      })}
          
           
  </div>;
};

export default Categories;
