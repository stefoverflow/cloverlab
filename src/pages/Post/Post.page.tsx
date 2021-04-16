import React, { useContext } from "react";
import { RouteComponentProps } from "react-router";
import PostsProvider from "providers/PostProvider";
import PostContext from "providers/PostProvider/Post.context";

import "./Post.styles.scss";

type PostProps = {
  id?: string;
};

const Post: React.FC<RouteComponentProps<PostProps>> = (props) => {
  const { id } = props.match.params;
  const { getSinglePost } = useContext(PostContext);
  const post = getSinglePost(Number.parseInt(id));
  console.log("post", post);

  return (
    <div className="post">
      <div className="post__image">
        <div className="post__image__section"></div>
        <div className="post__image__title">{post?.title.rendered}</div>
        <div className="post__image__share">
          <div>Share:</div>
          <div className="post__image__share__icon">f</div>
          <div className="post__image__share__icon">ln</div>
        </div>
      </div>
      <div className="post__text">
        <div className="post__text__item">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
};

const PostWrapper = (props: RouteComponentProps<{}>) => {
  return (
    <PostsProvider>
      <Post {...props} />
    </PostsProvider>
  );
};

export default PostWrapper;
