export interface IBlog {
  id: number;
  title: string;
  description: string;
  isNew: boolean;
  publishedAt: Date;
  modifiedAt: Date;
  author: string;
}
