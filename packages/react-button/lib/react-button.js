import React from 'react'
import styles from './react-button.module.css'
import clsx from 'clsx'

export default function Button({ label, size, isRounded, color }) {
  const classes = clsx(styles.button, {
    [styles.smBtn]: size === 'small',
    [styles.lgBtn]: size === 'large',
    [styles.xlBtn]: size === 'xl',
    [styles.roundedBtn]: isRounded === true,
    [styles.buttonRed]: color === 'red',
  })

  return <button className={classes}>{label}</button>
}
