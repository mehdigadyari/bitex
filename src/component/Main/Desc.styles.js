import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  subDiv: {
    position: 'absolute',
    flexDirection: 'column',
    top: 245,
    left: 900,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

    height: 230,
    [theme.breakpoints.down('xs')]: {
      top: 200,
      left: 80
    }
  },
  Div1: {
    flexDirection: 'column',
    display: 'flex',
    paddingBottom: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleSub1: {
    color: '#f2b80c',
    fontSize: 130,
    fontWeight: '600',
    height: 140
  },
  titleSub2: {
    color: '#f2b80c',
    fontSize: 30,
    fontWeight: '600'
  },
  titleSub3: {
    color: '#f1b90a',
    fontSize: 22,
    fontWeight: '300'
  },
  titleSub4: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    padding: 12,
    fontFamily: 'WOFF dana-thin'
  },
  titleSub5: {
    color: '#f1b90a',
    fontSize: 15,
    fontWeight: '200'
  },
  ArrowImg: {
    width: 50,
    height: 32
  }
}))
