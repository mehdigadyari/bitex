import { makeStyles } from '@material-ui/core'
import SlideTwoBack from '../../asset/SlideTwoBack.jpg'
import slide2Phone from '../../asset/slide2Phone.jpg'

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundImage: `url(${SlideTwoBack})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    minHeight: '100vh',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      backgroundImage: `url(${slide2Phone})`,
      backgroundSize: 'contain',
      overflow: 'hidden',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    }
  },
  image: {
    display: 'flex',
    marginTop: 20,
    marginLeft: 20,
    width: 160,
    height: 60,
    resize: 'stretch',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '30%',
      marginTop: 20
    }
  },

  button: {
    position: 'absolute',
    display: 'flex',
    backgroundColor: '#f2b80c',
    top: 20,
    left: '92%',
    width: 100,
    height: 50,
    [theme.breakpoints.down('xs')]: {
      top: '55%',
      left: '35%'
    }
  }
}))
