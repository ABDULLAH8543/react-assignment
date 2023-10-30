import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Deleteblog } from "../store/slics/slice";
import Nav from "./nav";

const Home = () => {
  const blogs = useSelector((state) => state.blogs);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, seterror] = useState("");
  const [openOptions, setOpenOptions] = useState(null);

  useEffect(() => {
    if (blogs.length === 0) {
      seterror("Nothing to show");
    } else {
      seterror("");
    }
  }, [blogs]);

  const move = () => {
    navigate("/");
  };

  const readmore = (id) => {
    navigate(`/read/${id}`);
  };

  const update = (id) => {
    navigate(`/update/${id}`);
  };

  const handeledelete = (id) => {
    dispatch(Deleteblog({ id: id }));
  };

  const toggleOptions = (index) => {
    if (openOptions === index) {
      setOpenOptions(null);
    } else {
      setOpenOptions(index);
    }
  };

  const renderBlogContent = (blog) => {
    return { __html: blog.blog };
  };

  return (
    <div>
      <Nav />
      <div id="home">
        <h1 onClick={move}>Create</h1>
        {error && <h1 style={{ color: "red" }}>{error}</h1>}
        {blogs.map((blog, index) => (
          <div id="homecard" key={index}>
            <h1>{blog.title}</h1>
            <span onClick={() => toggleOptions(index)}>...</span>
            <div
              id="options"
              style={{ display: openOptions === index ? "block" : "none" }}
            >
              <p onClick={() => readmore(blog.id)}>Read more</p>
              <p onClick={() => update(blog.id)}>Update</p>
              <p onClick={() => handeledelete(blog.id)}>Delete</p>
            </div>
            <p dangerouslySetInnerHTML={renderBlogContent(blog)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
