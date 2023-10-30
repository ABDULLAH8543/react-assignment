import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addblog } from "../store/slics/slice";
import ReactQuill from "react-quill";
import Nav from "./nav";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Write something in title"),
    blog: Yup.string().required("Write something in blog"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      blog: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const newId = uuidv4();
      dispatch(addblog({ id: newId, title: values.title, blog: values.blog }));
      formik.resetForm();
      navigate("/home");
    },
  });

  const move = () => {
    navigate("/home");
  };

  return (
    <div>
      <Nav />
      <div id="create">
        <h1>Create</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            name="title"
          />
          {formik.touched.title && formik.errors.title && (
            <p style={{ color: "red" }}>{formik.errors.title}</p>
          )}
          <h1>Blog</h1>
          <ReactQuill
            theme="snow"
            value={formik.values.blog}
            onChange={(value) => formik.setFieldValue("blog", value)}
            style={{ height: "200px" }}
          />
          <br />
          <br />
          {formik.touched.blog && formik.errors.blog && (
            <p style={{ color: "red" }}>{formik.errors.blog}</p>
          )}
          <h1 onClick={move}>See blogs</h1>
          <button id="createbtn" type="submit">
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
