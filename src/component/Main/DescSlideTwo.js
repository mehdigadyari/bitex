import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './DescSlideTwo.styles'
import Tik from '../../asset/tik.png'

export default function DescSlideTwo() {
  const classes = useStyles()

  return (
    <div className={classes.subDiv}>
      <div className={classes.Div1}>
        <Typography className={classes.titleSub1}>حالت حرفه ای</Typography>
        <Typography className={classes.titleSub2}>
          در حالت حرفه ای به ابزار های معامله حرفه ای و
        </Typography>
        <Typography className={classes.titleSub3}>
          چندین ویژگی پیشرفته دسترسی خواهید داشت
        </Typography>
      </div>
      <div>
        <div className={classes.divTypo}>
          <img src={Tik} alt="Tik" className={classes.Tik} />
          <Typography className={classes.titleSub4}>
            مشاهده لحظه ای سفارشات
          </Typography>
        </div>
        <div className={classes.divTypo}>
          <img src={Tik} alt="Tik" className={classes.Tik} />
          <Typography className={classes.titleSub4}>
            ابزار های تحلیل نمودار
          </Typography>
        </div>
        <div className={classes.divTypo}>
          <img src={Tik} alt="Tik" className={classes.Tik} />
          <Typography className={classes.titleSub4}>
            سرعت بالا در ثبت سفارش و انجام معاملات
          </Typography>
        </div>
      </div>
    </div>
  )
}
