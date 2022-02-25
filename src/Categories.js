import React, { Fragment } from 'react';
import {Button } from '@mui/material';
import { Grid } from '@material-ui/core';




const Categories = ({category,categories}) => {
  
  return <Fragment>
    
    
        {category.map((category,index)=>{
          return(
          //   <button className='filter-btn' key={index} onClick={()=>categories(category)}>
          // {category}</button> 
           <Button key={index} sx={{margin:'5px'}}  onClick={()=>categories(category)} variant="contained">{category} </Button>   
          )
      })}
          
         
  </Fragment>;
};

export default Categories;
