import React, { useState, useContext } from 'react'
import useStyles from './Code.styles'
import {
  Typography,
  Button,
  Snackbar,
  SnackbarContent
} from '@material-ui/core'
import ReactCodeInput from 'react-code-input'
import { LoginContext } from '../../../contexts/LoginContext'
import { SIGNUP } from '../../../constants/ActionType'

export default function Code() {
  const { state, dispatch } = useContext(LoginContext)
  const [code, setCode] = useState('')
  const [open, setOpen] = useState(false)
  const [openError, setOpenError] = useState(false)
  const classes = useStyles()
  const numType = localStorage.getItem('loginNum')

  const checkCode = () => {
    let status
    fetch('https://phinix.dev/pla/api/user/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mobile_number: numType,
        code: code
      })
    })
      .then((response) => {
        status = response.status
        return response.json()
      })
      .then(() => {
        if (status === 200) {
          localStorage.setItem('Register', 'register')
          dispatch({ type: SIGNUP })
        } else if (status === 422) {
          setOpenError(true)
        }
      })
      .catch(() => {
        setOpenError(true)
      })
  }

  const sendCodeAgain = () => {
    // //

    let status
    fetch('https://phinix.dev/pla/api/user/resend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mobile_number: numType
      })
    })
      .then((response) => {
        status = response.status
        return response.json()
      })
      .then(() => {
        if (status === 200) {
          setOpen(true)
        }
      })
      .catch(() => {
        setOpenError(true)
      })
  }

  return (
    <div className={classes.root} open={state.code}>
      <Typography className={classes.mainTitle} variant="body2">
        کد ارسالی به تلفن همراه را در کادر زیر وارد کنید:
      </Typography>
      <div className={classes.codeDiv} dir="ltr">
        <ReactCodeInput
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e)
          }}
          inputStyle={{
            backgroundColor: '#2a3a48',
            width: 35,
            height: 35,
            margin: 5,
            border: 'none',
            textAlign: 'center',
            color: '#fff',
            fontSize: 18
          }}
          fields={6}
        />
      </div>

      <Button
        fullWidth
        variant="text"
        className={classes.SendCodeAgainButton}
        color="primary"
        onClick={sendCodeAgain}
      >
        <Typography
          variant="body2"
          color="textPrimary"
          className={classes.counterText}
        >
          درخواست مجدد کد
        </Typography>
      </Button>
      <Button
        fullWidth
        className={classes.button}
        variant="outlined"
        color="primary"
        classes={{ label: classes.buttonLabelConfirm }}
        onClick={checkCode}
      >
        تایید کد
      </Button>
      <Button
        className={classes.buttonTwo}
        variant="outlined"
        classes={{ label: classes.buttonLabel }}
        onClick={() => {
          dispatch({ type: SIGNUP })
        }}
      >
        اصلاح شماره موبایل
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
      >
        <SnackbarContent
          style={{ backgroundColor: 'green' }}
          message="کد مجدداً ارسال شد"
        />
      </Snackbar>
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
    </div>
  )
}
