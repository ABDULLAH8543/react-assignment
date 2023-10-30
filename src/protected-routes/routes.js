// import React from "react";
// import { Navigate, Outlet } from "react-router";

// const Private = () => {
//   const user = localStorage.getItem('user');
//   const auth = { token: user.email && user.email.trim() !== '' };

//   return auth.token ? <Outlet /> : <Navigate to='/login' />;
// }
// const PrivateTwo = () => {
//   const user = localStorage.getItem('user');
//   const auth = { token: user.email === null || user.email === undefined || user.email.trim() === '' }

//   return auth.token ? <Outlet /> : <Navigate to='/' />
// }

// export { Private, PrivateTwo };




import React from "react";
import { Navigate, Outlet } from "react-router";

const Private = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const auth = { token: user && user.email && user.email.trim() !== '' };

  return auth.token ? <Outlet /> : <Navigate to='/login' />;
}

const PrivateTwo = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const auth = { token: !user || !user.email || user.email.trim() === '' }

  return auth.token ? <Outlet /> : <Navigate to='/' />
}

export { Private, PrivateTwo };
