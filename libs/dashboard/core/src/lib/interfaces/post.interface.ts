import { UserInterface } from './user.interface';

export interface PostInterface {
  id: number;
  title: string;
  author: UserInterface;
  status: string;
  createdAt: string;
  publishedAt?: string;
}
