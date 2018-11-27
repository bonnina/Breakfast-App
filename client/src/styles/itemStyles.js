const styles = theme => ({
  root: {
    fontSize: '60px'
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: theme.spacing.unit * 3,
    height: '100vh'
  },
  text: {
    fontSize: '50px',
    margin: '0 1.5vw 1.5vw 0',
    textAlign: 'center',
    color: 'white',
    padding: '0 0 0.5vw 0.5vw',
    [theme.breakpoints.down('sm')]: {
     fontSize: '43px',
    },
    [theme.breakpoints.down('xs')]: {
     fontSize: '37px',
     margin: '0 1vw 1vw 0',
     padding: '0 0 1vw 0',
     },
     [theme.breakpoints.down('385')]: {
      fontSize: '30px',
      margin: '0 0 1vw 0',
    }
   },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '50px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '43px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '37px',
    },
    [theme.breakpoints.down('385')]: {
      fontSize: '30px',
    }
  },
  header: {
    color: '#d9d9d9',
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
      marginLeft: '-1px',
    },
    [theme.breakpoints.down('365')]: {
      fontSize: '25px',
      marginLeft: '-5px',
    },
  },
  subHeader: {
    color: '#999999',
    marginLeft: '10px',
    marginBottom: '-10px'
  },
});

export default styles;