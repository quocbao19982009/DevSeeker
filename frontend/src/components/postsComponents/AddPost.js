import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./AddPost.module.css";
import { addingPost } from "../../actions/postAction";
const AddPost = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addingPost({ text: text }));
    setText("");
  };
  return (
    <div className={classes.postForm}>
      <div className={classes.title}>
        <h3>Say Something...</h3>
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit" className={classes.btn}>
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
