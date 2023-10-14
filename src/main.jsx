import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { Formulario } from './components/Formulario';
import { ProtectedRouter } from './components/ProtectedRouter';
import { Logueado } from './components/Logueado';
import { Nosotros } from './components/Nosotros';
import { Contacto } from './components/Contacto';


const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />
  },
  {
    path: "login",
    element: < Formulario />
  },
  {
    path: "nosotros",
    element: < Nosotros />
  },
  {
    path: "contacto",
    element: < Contacto />
  },
  {
    path: "dashboard",
    element: < Logueado />
  },
  {
    path: "login",
    element: < ProtectedRouter />,
    children: [
      {
        path: "dashboard",
        element: < Logueado />
      },
    ]
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  < React.StrictMode >
    < RouterProvider router={ router } />
  </React.StrictMode>

);
