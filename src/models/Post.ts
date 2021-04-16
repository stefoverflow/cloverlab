export type Post = {
  author: number;
  categories: Array<number>;
  comment_status: string;
  content: Content;
  date: string;
  date_gmt: string;
  excerpt: Content;
  guid: Rendered;
  id: number;
  link: string;
  meta: Array<string>;
  modified: string;
  modified_gmt: string;
  ping_status: string;
  slug: string;
  status: string;
  sticky: boolean;
  tags: Array<number>;
  template: string;
  title: Rendered;
  type: string;
}

export type Content = {
  protected: boolean;
  rendered: string;
}

export type Rendered = {
  rendered: string;
}