import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button } from '@mui/material';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles({
    
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 140,
    },
  });


const Menu = ({items}) => {
    const classes = useStyles();


    
  
    return (
      <Fragment >
              {items.map((restaurants)=>{
          const {id,name,category,price,img,description }  =restaurants;
          return (
           
            <Card   sx={{width:250,margin:'15px'}} key={id} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={img}
                title={name}
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="h2">
                  {name }
                </Typography>
           
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Menu
              </Button>
              <Button  sx={{display:"inline-block",float:'right'}} size="small" color="primary">
                Valorar
              </Button>
            </CardActions>
          </Card>
         
       ) 
      })}
       
        </Fragment>
      );
    
  
};

export default Menu;
