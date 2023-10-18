import React from 'react'

function PartList({total, path, active, set, zoom=1, top, left}) {
  let parts = [];
  for ( let i = 0; i < total; i++) {
    parts.push(
        <div key={path + i} className={active === i ? "active clickable square" : "clickable square"} onClick={() => set(i)}>
            <img className="imgcenter" src={`character/${path}/${i+1}.png`} alt='' height={60*zoom} style={{top, left}}/>
        </div>
    );
  }
    return (
    <div className='list'>
      {parts}
    </div>
  )
}

export default PartList
