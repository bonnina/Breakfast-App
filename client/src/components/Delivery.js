import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/deliveryStyles';
import Items from './Items';
import Menu from './Menu';
import { items } from './food_and_drinks';
import { addToOrder } from '../actions';

const mapStateToProps = function (store) {
  return {
    order: store.order
  };
};

const mapDispatchToProps = dispatch => ({
  addToOrder: el => {
    dispatch(addToOrder(el));
  //  el.display = 'none'
  }
})

class Delivery extends React.Component {
  render() {
  const { classes, history, match } = this.props;
  
  return (
    <BrowserRouter>
      <div className={classes.root}> 
        <Menu match={match} history={history} />
        <main className={classes.content}> 
          
          <Switch> 
            <Route path={`${match.path}/:name`} component={Items}/>
            <Route path="*" component={ ()=> (
              <div>
                <Typography variant='h4'  className={classes.header} gutterBottom>
                Click items to add:
                </Typography>
                <Grid container spacing={8} justify="center" className={classes.container}>
                  {items.map((item) => (
                    item.contents.map((el) => (
                      <Grid item 
                      key={el.text} 
                      style={{width: `${el.space}`, cursor: 'pointer'}}
                      role='button' 
                      tabIndex="0"
                      onClick={() => this.props.addToOrder(el)}>
                        <Typography variant="h2" style={{ backgroundColor: `${el.backgroundColor}`}} 
                        className={classes.text}>
                        {el.text}
                        </Typography>
                      </Grid>
                    ))
                  ))}
                </Grid>
              </div>
            )} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
    );
  }
}

export default  withStyles(styles)(
  withRouter( 
    connect(mapStateToProps, mapDispatchToProps)(Delivery) 
  )
);
