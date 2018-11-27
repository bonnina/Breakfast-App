const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  label: {
    color: '#d27979',
    fontSize: '30px',
    lineHeight: '0.4',
    paddingBottom: '5px',
  },
  textField: {
    color: '#999999',
    fontSize: '20px',
    lineHeight: '0.8',
    marginRight: theme.spacing.unit,
    width: 300,
    [theme.breakpoints.down('xs')]: {
      width: 240
    },
  },
  input: {
    color: '#999999',
    fontSize: '20px',
    width: 300,
    [theme.breakpoints.down('xs')]: {
      width: 240
    },
  },
  header: {
    color: '#d9d9d9',
    marginLeft: '-10px',
    marginTop: '5px',
    '&:first-letter': {
      textTransform: 'uppercase'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
       marginLeft: '-20px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
    [theme.breakpoints.down('365')]: {
      fontSize: '25px',
      marginLeft: '-25px',
    },
  },
  button: {
    backgroundColor: '#d9d9d9',
    textAlign: 'center',
    paddingBottom: '15px',
    marginTop: '2vw',
    marginLeft: '1vw'
  },
});

export default styles;