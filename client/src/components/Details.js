import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Input, Typography, Button } from '@material-ui/core';
import styles from '../styles/detailStyles';

const mapStateToProps = function (store) {
  return {
    order: store.order,
    location: store.details.location
  };
};

class Details extends React.Component {

  addOrder(e) {
    e.preventDefault()
    let adr; 
    this.props.location === 'delivery' ? adr = e.target.elements.address.value : adr = 'eat in';
    
    let formData = {
      'name': e.target.elements.name.value,
      'time': e.target.elements.time.value,
      'address': adr,
      'order': this.props.order.map(el => el.text)
     };
   
  } 

  render() {
    const { classes } = this.props;
    const buttonStyles = {textTransform: 'lowercase', color: 'white', lineHeight: '0.7', marginLeft: '-6px'};
    return (
      <div>
        <Typography variant='h4'  className={classes.header} gutterBottom>
        Order info:
        </Typography>
        <form className={classes.container} onSubmit={(e) => this.addOrder(e)} id='order'>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='name' className={classes.label}>Your name</InputLabel>
            <Input
            id='name'
            name='name'
            type='text'
            placeholder='name'
            className={classes.input}
            inputProps={{
             'aria-label': 'Description',
            }}
            required
            />
          </FormControl>
         
          <FormControl className={classes.formControl}>
          <InputLabel htmlFor='time' className={classes.label}>Time (tomorrow)</InputLabel>
          <Input
          id='time'
          name='time'
          type='time'
          defaultValue='08:30'
          className={classes.textField}
          inputProps={{
            step: 300,
          }}
          required
          />
          </FormControl>

          {this.props.location === 'delivery' && 
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='address' className={classes.label}>Address</InputLabel>
            <Input
            id='address'
            name='address'
            placeholder='address'
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
            required
            />
          </FormControl>
          }
          </form>
          <Button className={classes.button} type='submit' form='order'>
            <Typography variant='h4' style={buttonStyles} className={classes.header}>
              Confirm order
            </Typography>
          </Button>
      </div>
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps)(Details) 
);