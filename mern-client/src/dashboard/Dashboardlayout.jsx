import React from 'react'
import { Outlet } from 'react-router-dom'

import DashboardSidebar from './DashboardSidebar'

function Dashboardlayout() {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
    <DashboardSidebar/>
      <Outlet/>
    </div>
  )
}

export default Dashboardlayout
