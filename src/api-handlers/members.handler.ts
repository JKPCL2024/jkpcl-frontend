import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL;

export const getAllMembers = async () => {
    const members = await axios.get(`${BACKEND_URL}/members/allmembers`);
    return members.data;
}