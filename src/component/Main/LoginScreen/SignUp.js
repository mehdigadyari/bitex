import React, { useState, useContext, useEffect } from 'react'
import {
  Typography,
  Button,
  TextField,
  SnackbarContent,
  Snackbar
} from '@material-ui/core'
import useStyles from './SignUp.styles'
import { LoginContext } from '../../../contexts/LoginContext'
import { CODE } from '../../../constants/ActionType'

export default function SignUp() {
  const classes = useStyles()
  const { state, dispatch } = useContext(LoginContext)
  const [mobile, setMobile] = useState('')
  const [mobileError, setMobileError] = useState('')
  const [disabledBtn, setDisabledBtn] = useState(true)
  const [openError, setOpenError] = useState(false)
  const [success, setSuccess] = useState(false)
  const RegisterComp = localStorage.getItem('Register')

  useEffect(() => {
    let mobilePattern = /^09[0-9]{9}$/
    if (mobilePattern.test(mobile)) {
      setMobileError('')
      setDisabledBtn(false)
    } else if (mobile === '') {
      setMobileError('')
    } else {
      setMobileError('تلفن همراه را به درستی وارد کنید')
      setDisabledBtn(true)
    }
  }, [mobile])
  useEffect(() => {
    if (RegisterComp === 'register') {
      setSuccess(true)
      localStorage.removeItem('Register')
    }
  }, [])

  const signUp = () => {
    let status
    fetch('https://phinix.dev/pla/api/user/store', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mobile_number: mobile
      })
    })
      .then((response) => {
        status = response.status
        return response.json()
      })
      .then((responseJson) => {
        // console.log(responseJson, status)
        if (status === 422) {
          setMobileError(responseJson.errors.mobile_number[0])
        } else if (status === 201) {
          localStorage.setItem('loginNum', mobile)
          dispatch({ type: CODE })
        }
      })
      .catch(() => {
        setOpenError(true)
      })
  }

  return (
    <div open={state.signup} className={classes.root}>
      <Typography className={classes.title} color="primary" variant="h4">
        ثبت نام
      </Typography>
      <div className={classes.inputDiv}>
        <Typography className={classes.titleIn} color="primary" variant="h6">
          تلفن همراه
        </Typography>
        <TextField
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value)
          }}
          error={mobileError.length > 0}
          helperText={mobileError}
          classes={{ root: classes.inputContainer }}
          inputProps={{
            className: classes.input,
            onFocus: () => {
              setMobileError('')
            }
          }}
        />

        <Button
          disabled={disabledBtn}
          onClick={signUp}
          className={classes.button}
          variant="outlined"
        >
          ثبت نام
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={openError}
        onClose={() => setOpenError(false)}
        autoHideDuration={3000}
      >
        <SnackbarContent
          style={{ backgroundColor: 'red' }}
          message="خطایی در ارتباط با سرور اتفاق افتاد، دوباره تلاش کنید"
        />
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={success}
        onClose={() => setSuccess(false)}
        autoHideDuration={2000}
      >
        <SnackbarContent
          style={{ backgroundColor: 'green' }}
          message="ثبت نام شما با موفقیت انجام شد"
        />
      </Snackbar>
    </div>
  )
}
