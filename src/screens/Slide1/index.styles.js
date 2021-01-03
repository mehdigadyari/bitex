import { makeStyles } from '@material-ui/core'
import SlideoneBack from '../../asset/SlideoneBack.jpg'

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundImage: `url(${SlideoneBack})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    minHeight: '100vh',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      backgroundImage: `url(${SlideoneBack})`,
      backgroundSize: 'contain',
      overflow: 'hidden',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    }
  },
  // LoginScreenStyle: {
  //   // position: 'relative',
  //   backgroundColor: 'red',
  //   display: 'flex',
  //   width: '100%',

  //   [theme.breakpoints.down('xs')]: {
  //     display: 'flex',
  //     width: '100%',
  //     justifyContent: 'center',
  //     alignItem: 'center'
  //   }
  // },
  image: {
    display: 'flex',
    marginTop: 20,
    marginLeft: 20,
    width: 160,
    height: 60,
    resize: 'stretch',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '30%'
    }
  },

  Arrow: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    top: '93%',
    '&:hover': {
      borderColor: '#000',
      transition: '0.1s'
    }
  },

  button: {
    position: 'absolute',
    display: 'flex',
    backgroundColor: '#f2b80c',
    top: '75%',
    left: '37%',
    width: 100,
    height: 50
  }
}))
