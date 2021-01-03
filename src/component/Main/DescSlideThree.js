import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './DescSlideThree.styles'
import Tik from '../../asset/tik.png'

export default function DescSlideThree() {
  const classes = useStyles()

  return (
    <div className={classes.subDiv}>
      <div className={classes.Div1}>
        <Typography className={classes.titleSub1}>
          اپلیکیشن با تمام ویژگی ها
        </Typography>
        <Typography className={classes.titleSub2}>
          با اپلیکیشن موبایلی بیتکس همیشه و همه جا قابلیت
        </Typography>
        <Typography className={classes.titleSub3}>
          معامله به حرفه ای ترین شکل را داشته باشید
        </Typography>
      </div>
      <div>
        <div className={classes.divTypo}>
          <img src={Tik} alt="Tik" className={classes.Tik} />
          <Typography className={classes.titleSub4}>
            در دسترس برای Android و IOS
          </Typography>
        </div>
        <div className={classes.divTypo}>
          <img src={Tik} alt="Tik" className={classes.Tik} />
          <Typography className={classes.titleSub4}>
            دو مود تاریک و روشن
          </Typography>
        </div>
        <div className={classes.divTypo}>
          <img src={Tik} alt="Tik" className={classes.Tik} />
          <Typography className={classes.titleSub4}>
            دارا بودن دو حالت ساده و حرفه ای
          </Typography>
        </div>
      </div>
    </div>
  )
}
