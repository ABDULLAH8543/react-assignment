import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Nav from './nav'

const Read = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogs);

  const move = () => {
    navigate("/");
  };

  const back = () => {
    navigate("/home");
  };
  const selectedBlog = blogs.find((blog) => blog.id === id);

  return (
    <div>
      <Nav/>
      <div id="readheading"> 
      <h1 onClick={move}>Create</h1>
      <h1 onClick={back}>See blogs</h1>
      </div>
      <div id="read">
        <h1>{selectedBlog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: selectedBlog.blog }} />
        <div id="innercard">
          {blogs
            .filter((blog) => blog.id !== id)
            .map((blog, index) => (
              <div key={index}>
                <h1>{blog.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: blog.blog }} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Read;
