import React from 'react'

const Detail = (props) => {
  // console.log(props, 'props')
  const { match, location, history } = props
  console.log(match.params, 'mathc')
  return <div>{match.params.id}</div>
}

export default Detail