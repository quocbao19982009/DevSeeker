import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./AddComment.module.css";

const AddComment = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(addingPost({ text: text }));
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
          placeholder="Leave a Comment..."
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

export default AddComment;
