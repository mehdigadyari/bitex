import React from 'react'
import { Button, Typography, Hidden } from '@material-ui/core'
import Logo from '../../asset/logo.png'
import useStyles from './index.styles'
import DescSlideTwo from '../../component/Main/DescSlideTwo'

export default function Index() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img className={classes.image} src={Logo} alt="Logo" />
      <Button className={classes.button} variant="outlined">
        <Typography color="primary" variant="h6">
          ثبت نام
        </Typography>
      </Button>
      <Hidden xsDown>
        <DescSlideTwo />
      </Hidden>
    </div>
  )
}
