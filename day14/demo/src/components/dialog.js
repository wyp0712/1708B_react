import React,{ Fragment } from 'react'

const Dialog = (props) => {
  return (
    <Fragment>
      <div className="dialog">
        <div className="mask"></div>
        <div className="tip">
          { props.children }
        </div>
      </div>
    </Fragment>
  )
}

export default Dialog
