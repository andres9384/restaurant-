
import { Grid } from '@material-ui/core';
import { Container } from '@mui/material';
import { Fragment, useState } from 'react';
import './App.css';
import Categories from './Categories';
import restaurant from './food';
import Menu from './Menu';

const allCategories =['all',... new Set(restaurant.map((category)=>category.category))];


function App() {
  const [data, setData] = useState(restaurant);
  const [category, setCategory] = useState(allCategories);

  const categories=(category)=>{
    if(category === "all"){
      setData(restaurant)
      return;
    }
    const newCategory =restaurant.filter((item)=>item.category === category)
    setData(newCategory)
  }
 
  return (
    <Fragment>

    
    <section className='restaurant section'>
      <div className='title'>
        <h2>
          Restaurant
        </h2>
        <div className='underline'></div>
      </div>
     <Grid container spacing={1} justify="center" >
      <Categories  categories={categories} category={category}/> 
      </Grid>
      <Grid container spacing={1} justify="center" >
      <Menu items={data}/>
      </Grid>
    </section>
   
    </Fragment>
  );
}

export default App;
