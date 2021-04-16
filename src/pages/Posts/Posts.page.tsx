import React, { useContext } from "react";
import PostListing from "../../components/PostListing";
import PostsProvider from "providers/PostProvider";
import PostContext from "providers/PostProvider/Post.context";

import "./Posts.styles.scss";

type PostsProps = {};

const Posts: React.FC<PostsProps> = (props) => {
  const { posts, fetchPostsInProgress, error } = useContext(PostContext);

  if (error) {
    return (
      <div className="posts-page">
        <div className="posts-page__content">
          <div className="posts-page__content__error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="posts-page">
      {fetchPostsInProgress ? (
        <div className="posts-page__content">Loading...</div>
      ) : (
        <PostListing posts={posts} />
      )}
    </div>
  );
};

const PostsWrapper = () => {
  return (
    <PostsProvider>
      <Posts />
    </PostsProvider>
  );
};

export default PostsWrapper;
