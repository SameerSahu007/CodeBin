import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Paste from './components/Paste.tsx'
import Code from './components/Code.tsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/paste/:pasteId",
    element: <Paste />,
  },
  {
    path: "/code/:codeId",
    element: <Code />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
