import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../models/Post";

import "./PostListingItem.styles.scss";

type PostListingItemProps = {
  post: Post;
};

const PostListingItem: React.FC<PostListingItemProps> = (props) => {
  const { post } = props;

  return (
    <div className="post-listing-item">
      <div className="post-listing-item__image"></div>
      <div className="post-listing-item__text">
        <div className="post-listing-item__text__rendered">
          {post.title.rendered}
        </div>
        <div className="post-listing-item__text__content">
          Excerpt of the post lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit.
        </div>
        <Link to={`/posts/${post.id}`}>
          <button className="post-listing-item__text__button">
            <span className="post-listing-item__text__button__text">
              Read more
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostListingItem;
