import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

// actions
import { createPost } from "../../actions/posts.action";

// styles
import useStyles from "./Form.styles";

const Form = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    creator: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();

  console.log(postData);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    setPostData({
      title: "",
      message: "",
      creator: "",
      tags: "",
      selectedFile: "",
    });
  };

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          variant="outlined"
          name="creator"
          value={postData.creator}
          onChange={handleInput}
          label="Creator"
          fullWidth
        />
        <TextField
          variant="outlined"
          name="title"
          value={postData.title}
          onChange={handleInput}
          label="Title"
          fullWidth
        />
        <TextField
          variant="outlined"
          name="message"
          value={postData.message}
          onChange={handleInput}
          label="Message"
          fullWidth
        />
        <TextField
          variant="outlined"
          name="tags"
          value={postData.tags}
          onChange={handleInput}
          label="Tags"
          fullWidth
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          className={classes.buttonSubmit}
          size="large"
          fullWidth
        >
          Create Post
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={clear}
          className={classes.buttonSubmit}
          size="small"
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
