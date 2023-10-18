import React from 'react'

function Part({path, index, zIndex}) {
  return (
    <div>
      <img src={`character/${path}/${index +1}.png`} alt="" width="200px" style={{zIndex, position: 'absolute', top: "10%", left: "10%"}}></img>
    </div>
  )
};

export default Part