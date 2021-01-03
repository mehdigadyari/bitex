import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  subDiv: {
    position: 'absolute',
    flexDirection: 'column',
    top: 260,
    left: 90,
    display: 'flex',

    height: 200,
    [theme.breakpoints.down('xs')]: {
      top: 200,
      left: 80
    }
  },
  Div1: {
    flexDirection: 'column',
    display: 'flex',
    paddingBottom: 35
  },
  titleSub1: {
    fontSize: 30,
    fontWeight: '600',
    height: 60
  },
  titleSub2: {
    fontSize: 18,
    fontWeight: '300'
  },
  titleSub3: {
    fontSize: 18,
    fontWeight: '300'
  },
  titleSub4: {
    color: '#b1b1b1',
    fontSize: 14,
    fontWeight: '100',
    marginTop: 10
  },
  divTypo: {
    flexDirection: 'row',
    display: 'flex',
    height: 40
  },
  Tik: {
    width: 40,
    height: 40
  }
}))
