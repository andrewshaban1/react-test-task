import axios from 'axios';
import { User } from '../types/user.type';
import { UserDto } from '../types/userDto.type';
import { AuthUserData } from '../types/auth.type';
import { API_URI } from '../constants/initialStates';

export const getUsersFromAPI = () => {
  return axios.get<User[]>(API_URI);
};

export const registerUser = (userDto: UserDto) => {
  return axios.post<AuthUserData>(import.meta.env.VITE_BACK_END_URI, {
    user: userDto,
  });
};

export const getUser = (token: string | undefined) => {
  console.log(token);

  return axios.get<AuthUserData>(import.meta.env.VITE_BACK_END_URI, {
    headers: { Authorization: token },
  });
};
