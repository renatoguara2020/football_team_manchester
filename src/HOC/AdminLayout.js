import React from 'react'

const AdminLayout = (props) => {
  return (
    <div className="admin_container">

            <div className="admin_left_nav">
              <br></br>
               Nav Bar
            </div>
            <div className="admin_right">
              <h2>{props.title}</h2>
              {props.children}
            </div>
    </div>
  )
}

export default AdminLayout;
