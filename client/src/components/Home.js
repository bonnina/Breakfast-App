import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Paper, Typography, Card, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/homepage';
import { location } from '../actions';
import Appbar from './AppBar';

const mapStateToProps = function (store) {
  return {
    pickedLocation: store.details.location
  };
};

const mapDispatchToProps = dispatch => ({
  location: opt => dispatch(location(opt))
})

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container className={classes.container} spacing={8} justify="space-evenly">
          <Grid item xs={12} sm={8} lg={8} xl={8}>
            <Grid container className={classes.container1} spacing={16} justify="space-evenly">
              <Link to='/delivery' style={{ textDecoration: 'none' }} >
                <Grid item xs={6} sm={6} lg={6} xl={6} className={classes.item1} onClick={() => this.props.location('eat in')}>
                  <Paper elevation={0} className={classes.paperL}>
                    <Typography variant='h1' className={classes.textLeft}>
                    eat
                    <br />
                    at
                    </Typography>
                    <Typography variant='h1' className={classes.logo} gutterBottom>
                    na
                    <br />
                    na
                    </Typography>
                  </Paper>
                </Grid>
              </Link>
              <Grid item xs={6} sm={6} lg={6} xl={6}>
                <Card className={classes.card} elevation={0}>
                  <CardMedia
                    className={classes.media}
                    image={require('./bread.svg')}
                    title="breakfast"
                  />
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} lg={4} xl={4}>
            <Link to='/delivery' style={{ textDecoration: 'none' }} >
              <Grid container className={classes.container2} spacing={0} justify="center" onClick={() => this.props.location('delivery')}>
                <Grid item xs={6} sm={12} lg={12} xl={12}>
                  <Paper elevation={0} className={classes.paperR}>
                    <Typography variant='h1' className={classes.order}>
                      order
                <br />
                      to
                </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={12} lg={12} xl={12}>
                  <Paper elevation={0} className={classes.paperR}>
                    <Typography variant='h1' className={classes.textRight}>
                      your
                <br />
                      door
                </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Link>
          </Grid>
        </Grid>

        <Appbar />
      </div>
    );
  }
}


export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);