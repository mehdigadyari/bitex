import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './Desc.styles'

export default function Desc() {
  const classes = useStyles()

  return (
    <div className={classes.subDiv}>
      <div className={classes.Div1}>
        <Typography className={classes.titleSub1}>100</Typography>
        <Typography className={classes.titleSub2}>میلیون تومان</Typography>
        <Typography className={classes.titleSub3}>
          معامله بدون کارمزد
        </Typography>
      </div>
      <Typography className={classes.titleSub4}>
        ثبت نام در بیتکس و دریافت هدیه
      </Typography>
      <Typography className={classes.titleSub5}>
        با پیش ثبت نام در سایت بیتکس، بعد از راه
      </Typography>
      <Typography className={classes.titleSub5}>
        اندازی، شما از 100 میلیون تومان معامله
      </Typography>
      <Typography className={classes.titleSub5}>
        بدون کارمزد بهره مند میشود
      </Typography>
    </div>
  )
}
