import React from "react";
import PostListingItem from "../PostListingItem";
import { Post as PostModel } from "../../models/Post";

type PostListingType = {
  posts: Array<PostModel>;
};

const PostListing: React.FC<PostListingType> = (props) => {
  const { posts } = props;

  return (
    <div>
      {posts.map((post) => (
        <PostListingItem post={post} />
      ))}
    </div>
  );
};

export default PostListing;
