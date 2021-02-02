import axios from "axios";

const headers = {
  "Content-Type": "application/json" 
};

export const useAxios = axios.create({
  headers
});