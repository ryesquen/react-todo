import React from 'react'
import ReactDOM from 'react-dom/client'
import 'todomvc-app-css/index.css'
import { App } from './App.tsx'
import './index.css'

const root = document.getElementById('root')

if (root !== null && root instanceof HTMLElement) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
