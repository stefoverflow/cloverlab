import { createContext } from 'react';
import { Post } from 'models/Post';

type NotificationContextContextProps = {
  posts: Post[],
  fetchPostsInProgress: boolean,
  error: string,
  getSinglePost: any,
}

export default createContext<Partial<NotificationContextContextProps>>({
  posts: [],
  fetchPostsInProgress: false,
  error: null,
  getSinglePost: null,
});