import axios from "axios";

export const retrieveCategories = () =>
  axios.get("http://localhost:3001/category").then((res) => res.data);
