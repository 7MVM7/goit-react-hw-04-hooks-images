import axios from "axios";

const key = "23035715-e0cb760b48ddc49b0eff80b6c";
axios.defaults.baseURL = "https://pixabay.com/api";

export const fetchImages = async ({ query, page }) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
