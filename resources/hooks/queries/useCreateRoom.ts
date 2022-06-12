import axios from 'axios';
import { useMutation } from 'react-query';

const BASE_URL = 'http://localhost:3000/rooms/';

const createRoomRequest = async (password: string) => {
  const { data } = await axios.post(BASE_URL, { password });
  return data;
};

export const useCreateRoom = () => {
  return useMutation(createRoomRequest);
};
