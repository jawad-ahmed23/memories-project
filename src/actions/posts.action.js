import * as api from "../api";

// Action creators - are just functions that return actions
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL_POSTS", payload: data.posts });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE_POST", payload: data.post });
  } catch (error) {
    console.log(error);
  }
};
