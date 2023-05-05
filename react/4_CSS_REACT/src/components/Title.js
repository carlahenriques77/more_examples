import React from 'react'

// import / style / css

import styles from './Title.module.css'

const Title = () => {
  return (
    <div>
        <h1 className={styles['title-title']}>
            Title.js Title
        </h1>
        {/* Seems like the "-" doesn't go soo well for the CSS thing, so you have to put it like this */}
        {/* A way for it to work normally can be done like this: 
        className={styles.title_title} */}
    </div>
  )
}

export default Title