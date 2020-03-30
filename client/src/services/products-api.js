import axios from "axios";

export const fetchTasks = () => {
  return axios
    .get(`http://localhost:3000/products`)
    .then(response => response.data);
};
