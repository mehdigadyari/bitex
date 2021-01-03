import React from 'react'
import { Button, Typography, Hidden } from '@material-ui/core'
import Logo from '../../asset/logo.png'
import SlideThree from '../../asset/SlideThree.png'
import useStyles from './index.styles'
import DescSlideThree from '../../component/Main/DescSlideThree'

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
        <img
          className={classes.imageSlideThree}
          src={SlideThree}
          alt="SlideThree"
        />
        <DescSlideThree />
      </Hidden>
    </div>
  )
}
