import axios from "axios";

export const getAllMediumPosts = async () => {
  const href = `https://v1.nocodeapi.com/${process.env.MEDIUM_USERNAME}/medium/${process.env.MEDIUM_API_KEY}`;
  const { data } = await axios.get(href);
  return data;
};
