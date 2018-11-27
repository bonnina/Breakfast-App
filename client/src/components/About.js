import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/aboutStyles';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faCommentAlt);

class About extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container className={classes.container} spacing={16} justify="center">
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant='h4' className={classes.motto}>
              Don't cook, sleep more.
              Have breakfast at NANA
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Paper elevation={0} className={classes.paper} style={{backgroundColor: '#e8c9c9'}}>
              <Typography variant='h4' className={classes.about}>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Paper elevation={1} className={classes.paper} style={{backgroundColor: ''}}>
              <Typography variant='h2' className={classes.about}>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} xl={6}>
            <Paper elevation={1} className={classes.paper} style={{backgroundColor: '#c65353'}}>
              <FontAwesomeIcon icon="comment-alt" className={classes.contact} />
            </Paper>
          </Grid>
        </Grid>
        <div className={classes.credit}>Homepage icon made by 
          <a href="https://www.flaticon.com/authors/freepik" title="Bread" className={classes.href}> Bread </a> 
          from <a href="https://www.flaticon.com/" title="Flaticon" className={classes.href}> www.flaticon.com </a> 
          is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"     
          title="Creative Commons BY 3.0" className={classes.href}> CC 3.0 BY </a>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);