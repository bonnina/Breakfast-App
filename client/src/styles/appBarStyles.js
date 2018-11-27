  const styles = theme => ({
    appBar: {
      top: 'auto',
      bottom: 0,
      backgroundColor: '#f6eeee',
      height: '2.5vw',
      [theme.breakpoints.down('sm')]: {
        height: '7vw',
      },
      [theme.breakpoints.down('xs')]: {
        height: '10vw',
      }
    },
    toolbar: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    iconBut: {
      '&:hover': {
        backgroundColor: '#f6eeee', 
        color: '#993333'
      }
    },
    iconCart: {
      color: '#a37575',
      fontSize: '35px',
      marginTop: '-1vw',
      '&:hover': {
        color: '#993333'
      }
    },
    iconMenu: {
      color: '#a37575',
      fontSize: '35px',
      marginTop: '-1vw',
      '&:active': {
        backgroundColor: '#f6eeee', 
        color: '#993333'
      }
    },
    tooltip: {
      fontSize: '20px',
      '&:hover': {
        backgroundColor: '#f6eeee', 
        color: '#993333',
      },
    },
    logoSmall: {
      color: '#cc6666',
      fontSize: '25px',
      lineHeight: 0.6,
      fontWeight: 'bold',
      marginTop: '-1vw',
      '&:hover': {
        // transform: 'translate(2px, 1px) rotate(270deg)'
      }
    },
  });

  export default styles;