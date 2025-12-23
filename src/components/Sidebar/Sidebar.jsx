import React from 'react'
import "./Sidebar.css"
import CtegoryColleps from '../CtegoryColleps/CtegoryColleps'

const Sidebar = () => {
  return (
    <aside className='Sidebar'>
        <div className="Box">
            <h3 style={{fontWeight:"400",backgroundColor:"#ffff"}}>Shop By Category</h3>
            <div className="ProductData">
              <CtegoryColleps/>
            </div>
            <div className="scrrol">

            </div>
        </div>
    </aside>
  )
}

export default Sidebar