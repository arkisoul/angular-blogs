export type TNewBlog = {
  title: string;
  body: string;
  userId: number;
}

export interface IBlog {
  id: number;
  title: string;
  body: string;
  userId: number;
}
