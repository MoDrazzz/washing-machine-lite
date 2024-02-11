import React from 'react'
import { Reservations } from "./components";
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Reservations />
  },
  {
    path: "/users",
    element: <h1>Users</h1>
  },
]);

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router