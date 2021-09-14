import React from 'react'
import styles from './react-button.module.css'

const Button = ({ children }) => (
  <button className={styles.button}>{children}</button>
)

export { Button }
