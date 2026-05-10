import React from 'react'
import "../style/mobilebar.scss"


const MobileBar = ({toggle, mobileNavActive}) => {
  return (
    <div onClick={toggle} className={`wrapper ${mobileNavActive ? "isActive" : ""}`} >
        <div className="line_menu half start"></div>
        <div className="line_menu"></div>
        <div className='line_menu half end'></div>
    </div>
  )
}

export default MobileBar