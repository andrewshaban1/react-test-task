import axios from 'axios';
import { User } from '../types/user.type';

export const getUsersFromAPI = () => {
  return axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
};
