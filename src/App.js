import React, { useEffect } from "react";
import { Container, Grid, AppBar, Typography, Grow } from "@material-ui/core";
import Posts from "./components/Posts/Posts.component";
import Form from "./components/Form/Form.component";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts.action";

// styles
import useStyles from "./App.styles";

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log('hello world')

  console.log("hello");

  return (
    <Container max-width="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src="/images/memories.png"
          alt="appbar-img"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
