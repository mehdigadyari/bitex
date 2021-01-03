import React from 'react'
import Arrow from '../../asset/Arrow.png'
import useStyles from './Desc.styles'
// import { animations, easings } from 'react-animation'
import { motion } from 'framer-motion'
export default function ArrowImg() {
  const classes = useStyles()
  const list = { hidden: { opacity: 0 } }
  const item = { hidden: { x: -10, opacity: 0 } }

  return (
    <div>
      <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>
    </div>
  )
}
