import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './MasterLayout.styles'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import ReactPageScroller from 'react-page-scroller'

export default function MasterLayout() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <ReactPageScroller animationTimer={600}>
          <Grid className={classes.sliderGrid} item lg={12} xs={12}>
            <Slide1 />
          </Grid>
          <Grid className={classes.sliderGrid} item lg={12} xs={12}>
            <Slide2 />
          </Grid>
          <Grid className={classes.sliderGrid} item lg={12} xs={12}>
            <Slide3 />
          </Grid>
        </ReactPageScroller>
      </Grid>
    </div>
  )
}
