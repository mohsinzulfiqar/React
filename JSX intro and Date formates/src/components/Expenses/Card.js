import React from 'react'

function Card(props) {
    const classes='card ' + props.className;
  return (
    <div className={classes}>
        {props.children}
        {/* this is proposition children prop concept */}
    </div>
  )
}

export default Card