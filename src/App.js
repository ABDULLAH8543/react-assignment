// import React from 'react'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Create from './pages/create'
// import Home from './pages/home'
// import Read from './pages/read'
// import Update from './pages/update'
// import './App.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Create />
//   },
//   {
//     path: '/home',
//     element: <Home />
//   },
//   {
//     path: '/read/:id',
//     element: <Read />
//   },
//   {
//     path: '/update/:id',
//     element: <Update />
//   }
// ])

// const App = () => {
//   return (
//     <RouterProvider router={router} />
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './pages/create';
import Home from './pages/home';
import Read from './pages/read';
import Update from './pages/update';
import Login from './pages/login';
import { Private, PrivateTwo } from './protected-routes/routes';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<Private />}>
            <Route element={<Create />} path="/" />
            <Route element={<Home />} path="/home" />
            <Route element={<Read />} path="/read/:id" />
            <Route element={<Update />} path="/update/:id" />
          </Route>
          <Route element={<PrivateTwo />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
