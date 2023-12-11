import axios from "axios";
import { BASE_URL } from "./APIConstants";

export async function login(credentials) {
  const response = await axios.post(`${BASE_URL}/user/signin`, credentials);
  return response.data;
}

export async function saveFeedBack() {
  const response = await axios.post(`${BASE_URL}/feedback`);
  return response.data;
}

export async function fetchFeedBack(){
  try {
      const response=await axios.get(`${BASE_URL}/feedback`);
      return response.data;
  } catch (error) {
      console.log(error);
  }
}