import { makeStyles } from '@material-ui/core'
import slide3Phone from '../../asset/slide3Phone.jpg'

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      backgroundImage: `url(${slide3Phone})`,
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
    [theme.breakpoints.down('xs')]: {
      marginLeft: '30%'
    }
  },
  imageSlideThree: {
    display: 'flex',
    position: 'absolute',
    width: 330,
    height: '75%',
    top: 100,
    left: '62%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '30%'
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
