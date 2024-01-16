import { User } from '../types/user.type';

export const userInitialState: User = {
  id: 0,
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
  },
  company: {
    name: '',
  },
};

export const API_URI = 'https://jsonplaceholder.typicode.com/users';
