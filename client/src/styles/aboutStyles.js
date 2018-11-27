const styles = theme => ({
  container: {
    padding: '4vw 20vw 3vw 20vw',
    [theme.breakpoints.down('md')]: {
      padding: '4vw 15vw 3vw 15vw',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '4vw 5vw 3vw 5vw',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '4vw 15vw 3vw 15vw',
    },
 },
  paper: {
    height: '40vh',
    backgroundColor: '#c65353',
    [theme.breakpoints.down('xs')]: {
      height: '25vh',
    },
  },
  motto: {
    color: 'white',
    padding: '4vw 3vw',
    fontSize: '3vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4vw',
      padding: '5vw 4vw',
    },
    [theme.breakpoints.down('500')]: {
      padding: '6vw 8vw',
      fontSize: '6vw',
    },
  },
  contact: {
    color: '#e8c9c9',
    padding: '20% 29%',
    fontSize: '150px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '100px',
      padding: '15vw',
    },
  },
  credit: {
    textAlign: 'center',
    fontSize: '10px',
    color: '#c65353',
  },
  href: {
    color: '#c65353',
  }
});

export default styles;