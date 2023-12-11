import axios from "axios";
import { BASE_URL } from "./APIConstants";

export async function signup(userData){
    try {
        const response=await axios.post(`${BASE_URL}/user/signup`,userData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
