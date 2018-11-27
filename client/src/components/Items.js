import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import styles from '../styles/itemStyles';
import { items } from './food_and_drinks';
import { addToOrder, removeFromOrder } from '../actions';
import Details from './Details';

const mapStateToProps = function (store) {
  return {
    order: store.order,
    location: store.details.location
  };
};

const mapDispatchToProps = dispatch => ({
  addToOrder: el => {
    dispatch(addToOrder(el));
  //  el.display = 'none'
  },
  removeFromOrder: el => {
    dispatch(removeFromOrder(el));
  }
})

class Items extends React.Component {
  render() {
  const { classes, match } = this.props;
  let arr = null; 
  let heading = '';
  let just = 'center';
  let order = false;
  const item = items.find(({ name }) => name === match.params.name);
  if (match.params.name === 'order') {
    order = true;
    arr = this.props.order;
    heading = 'Your order:';
    just = 'flex-start';
  } 
  else {
     arr = item.contents;
     heading = 'Click items to add:';
  }
  
    return (
      <div className={classes.root}>
        <Typography variant='h4'  className={classes.header} gutterBottom>
        {heading}
        </Typography>
        {(order && this.props.order.length !== 0) 
        ? <Typography variant='h6'  className={classes.subHeader} gutterBottom>
          click items to remove
          </Typography>
        : order && <Typography variant='h6'  className={classes.subHeader} gutterBottom>
          nothing was added yet
          </Typography>
        }
        <main className={classes.content}> 
        <Grid container spacing={8} justify={just} className={classes.container}>
        {arr.map((el) => (
          <Grid item 
          key={el.text} 
          style={{width: `${el.space}`, cursor: 'pointer'}} 
          role='button' 
          tabIndex="0"
          onClick={() => {order ? this.props.removeFromOrder(el) : this.props.addToOrder(el)}}>
              <Typography variant="h2" style={{ backgroundColor: `${el.backgroundColor}`}} 
              className={classes.text}>
              {el.text}
              </Typography>
          </Grid>
        ))}
        </Grid>
        {order &&
        <Details/>
        }
        </main>
      </div>
    )
  }
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Items) 
);
