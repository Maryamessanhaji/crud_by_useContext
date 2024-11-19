import React from 'react'
import {BrowserRouter,Outlet,Route,Routes}  from 'react-router-dom'
import Edit from './Edit'
import AddItem from './AddItem'
import Users from './Users'
import DeleteUser from './DeleteUser'

export default function Layout() {
  return (
    <>
     <BrowserRouter>
     <Routes>
         <Route index element={<Users />} />
         <Route path="adduser" element={<AddItem  />} />
         <Route path="user/:id/edit" element={<Edit  />} />
         <Route path="user/:id/delete" element={<DeleteUser  />} />
        
     </Routes>
   </BrowserRouter>
   <Outlet/>
     </>
  )
}
