import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post.componet";

// Styles
import useStyles from "./Posts.styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
