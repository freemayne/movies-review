import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (
    <main className="p-0 m-0">
      <Outlet />
    </main>
  )
}

export default Layout