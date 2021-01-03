import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
    width: 350,
    height: 300,
    backgroundColor: '#292830',
    borderRadius: 7,
    marginLeft: 280,
    marginTop: '8%',
    justifyContent: 'center',
    alignItems: 'center',
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
  title: {
    color: theme.palette.primary.contrastText,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: -180,
    marginTop: 25,
    padding: 7
  },

  inputDiv: {
    flexDirection: 'column',
    marginLeft: 30,
    flex: 1,
    display: 'flex',
    padding: 2,
    paddingRight: 25
  },
  titleIn: {
    width: 250,
    color: '#e8e8ea',
    fontSize: 12,
    fontFamily: 'WOFF dana-mediumitalic',
    paddingTop: 20,
    paddingBottom: 7
  },
  inputContainer: {
    backgroundColor: '#f1f1f1',
    height: 50,
    borderWidth: 0,
    borderRadius: 5
  },
  input: {
    direction: 'ltr',
    textAlign: 'right',
    color: '#000',
    paddingRight: 12,
    height: 37,
    borderWidth: 0,
    borderRadius: 5,
    fontSize: 16,
    '&:focus': {
      outline: 'none'
    }
  },

  button: {
    backgroundColor: '#f2b80c',
    marginTop: 35,
    height: 50
  }
}))
