import React, { useState, useEffect } from "react";
import PostContext from "./Post.context";
import { Post } from "models/Post";
import api from "api";

type PostProviderProps = {};

const PostProvider: React.FC<PostProviderProps> = (props) => {
  const { children } = props;
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [fetchPostsInProgress, setFetchPostsInProgress] = useState<boolean>(
    false
  );
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError("");
        setFetchPostsInProgress(true);
        const response = await api.posts.getPosts();
        console.log("response", response.data);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
        setError("An error occured while fetching posts!");
      } finally {
        setFetchPostsInProgress(false);
      }
    };
    fetchPosts();
  }, []);

  const getSinglePost = (postId: number) =>
    posts.find((post: Post) => post.id === postId);

  return (
    <PostContext.Provider
      value={{ posts, fetchPostsInProgress, error, getSinglePost }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
