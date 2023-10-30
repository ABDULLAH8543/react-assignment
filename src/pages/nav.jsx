import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/slics/UserSlice';

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const remove = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
        <nav>
          <h1>Email: {user.email}</h1>
          <h1>Password: {user.password}</h1>
          <button onClick={remove}>Logout</button>
        </nav>
    </div>
  );
};

export default Nav;
