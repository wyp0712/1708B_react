import React,{ Fragment } from 'react'

const Dialog = (props) => {
  // console.log(props, 'props-----props')
  return (
    <Fragment>
      <div className="dialog">
        <div className="mask"
         onClick={ () => { props.closeMask() } } 
        ></div>
        <div className="tip">
          { props.children }
        </div>
      </div>
    </Fragment>
  )
}

export default Dialog
