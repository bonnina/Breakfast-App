import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { LocalDining, LocalCafe, ShoppingCart, Delete } from '@material-ui/icons';
import styles from '../styles/menuStyles';
import { deleteOrder } from '../actions';
import { withStyles } from '@material-ui/core/styles';
import { Drawer,
         CssBaseline,
         List,
         Divider,
         ListItem,
         ListItemIcon,
         Button,
         Dialog,
         DialogContent,
         DialogContentText,
         DialogActions } from '@material-ui/core';


const mapStateToProps = function (store) {
  return {
    order: store.order
  };
};

class Menu extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
  const { classes, match, history } = this.props;
  
  return (
    <div>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List >
          <Link to='/' style={{textDecoration: 'none'}} onClick={() => {history.push('/')}}>
            <ListItem button className={classes.listItem}>
              <ListItemIcon className={classes.listIcon}> 
                <HomeIcon />
              </ListItemIcon>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to={`${match.url}/food`} style={{textDecoration: 'none'}}> 
            <ListItem button className={classes.listItem}>
              <ListItemIcon className={classes.listIcon}>
                <LocalDining />
              </ListItemIcon>
            </ListItem>
          </Link> 
          <Link to={`${match.url}/drinks`} style={{textDecoration: 'none'}}> 
            <ListItem button className={classes.listItem}>
              <ListItemIcon className={classes.listIcon}>
                <LocalCafe />
              </ListItemIcon>
            </ListItem>
          </Link> 
          <Link to={`${match.url}/order`} style={{textDecoration: 'none'}} > 
            <ListItem button className={classes.listItem}>
              <ListItemIcon className={classes.listIcon}> 
                <ShoppingCart />
              </ListItemIcon>
             </ListItem>
          </Link>
          <ListItem button className={classes.listItem} onClick={this.handleClickOpen}>
            <ListItemIcon className={classes.listIcon}> 
              <Delete />
            </ListItemIcon>
          </ListItem>
          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog"
          >
          <DialogContent> 
          <DialogContentText id="alert-dialog" className={classes.dialogText}>
          Cancel your order?
          </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.dialogAct}>
            <Button onClick={() => {this.props.deleteOrder(); this.handleClose()}} className={classes.dialogButton}>
              Yes
            </Button>
            <Button onClick={this.handleClose} autoFocus className={classes.dialogButton}>
              Return
            </Button>
          </DialogActions>
        </Dialog>
        </List>
      </Drawer>
    </div>
    );
  }
}

export default withStyles(styles)(
  connect(mapStateToProps, { deleteOrder })(Menu)
);