import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Updateblog } from "../store/slics/slice";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Nav from "./nav";

const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogs);
  const existing = blogs.find((blog) => blog.id === id);
  const [newtitle, setnewtitle] = useState(existing ? existing.title : "");
  const [newblog, setnewblog] = useState(existing ? existing.blog : "");
  const [titleerror, settitleerror] = useState("");
  const [blogerror, setblogerror] = useState("");
  const handlesubmit = (event) => {
    event.preventDefault();
    if (newtitle === "") {
      settitleerror("Add something in title");
    }
    if (newblog === "") {
      setblogerror("Add something in blog");
    }
    if (newtitle !== "" && newblog !== "") {
      dispatch(
        Updateblog({
          id: id,
          title: newtitle,
          blog: newblog,
        })
      );
      navigate("/home");
    }
  };
  const move = () => {
    navigate("/home");
  };

  return (
    <div>
      <Nav/>
      <div id="create">
        <h1>Update</h1>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            name="title"
            value={newtitle}
            onChange={(e) => setnewtitle(e.target.value)}
            placeholder="Title"
          />
          {titleerror && <p style={{ color: "red" }}>{titleerror}</p>}
          <ReactQuill
            theme="snow"
            value={newblog}
            onChange={setnewblog}
            style={{ height: "200px" }}
          />
          <br />
          <br />
          <br />
          <br />
          {blogerror && <p style={{ color: "red" }}>{blogerror}</p>}
          <button id="createbtn">Update Blog</button>
          <h1 onClick={move}>See blogs</h1>
        </form>
      </div>
    </div>
  );
};

export default Create;
