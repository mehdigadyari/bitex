import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    display: 'flex',
    width: 350,
    height: 300,
    backgroundColor: '#292830',
    borderRadius: 7,
    marginLeft: 280,
    marginTop: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    '&:focus': {
      outline: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      height: 350,
      marginLeft: '5%',
      marginTop: '40%'
    }
  },
  mainTitle: {
    marginBottom: 15,
    padding: 7
  },
  codeDiv: {
    marginBottom: 7
  },
  counterText: {
    textAlign: 'center',
    width: '100%',
    marginTop: 15,
    fontSize: 12,
    color: '#b3aeae',
    height: 5
  },
  buttonText: {
    fontSize: 12
  },
  SendCodeAgainButton: {
    marginTop: 0,
    height: 10
  },
  button: {
    marginTop: 35,
    color: '#b3aeae'
  },
  buttonTwo: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'left'
  },
  buttonLabelConfirm: {
    color: '#b3aeae'
  },
  buttonLabel: {
    justifyContent: 'right',
    color: '#b3aeae',
    fontSize: 12
  }
}))
