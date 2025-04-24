import { UserInterface } from './user';

export interface PostInterface {
  id: string;
  title: string;
  author: UserInterface;
  status: string;
  createdAt: Date;
  publishedAt?: Date;
}
