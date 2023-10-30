import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../store/slics/UserSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=\S+$).{5,}$/,
        'Password must be 5 characters long and must contain 1 capital letter, 1 number, and no white spaces are allowed'
      )
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      dispatch(login(values)); 
      navigate('/');
    },
  });

  return (
    <div id="login">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email && (
          <p style={{ color: 'red' }}>{formik.errors.email}</p>
        )}
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Password"
        />
        {formik.touched.password && formik.errors.password && (
          <p style={{ color: 'red', width: '200px', height: 'fit-content' }}>
            {formik.errors.password}
          </p>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
