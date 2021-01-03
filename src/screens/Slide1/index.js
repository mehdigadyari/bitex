import React from 'react'
import { Hidden } from '@material-ui/core'
import Logo from '../../asset/logo.png'
import useStyles from './index.styles'
import LoginScreen from '../../component/Main/LoginScreen'
import Desc from '../../component/Main/Desc'
import ArrowImg from '../../component/Main/ArrowImg'
export default function Index() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img className={classes.image} src={Logo} alt="Logo" />
      <Hidden xsDown>
        <Desc />
      </Hidden>
      <LoginScreen />

      <div className={classes.Arrow}>
        <ArrowImg />
      </div>
    </div>
  )
}
