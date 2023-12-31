import axios from "axios";

export const retrieveCategories = () =>
  axios.get("http://localhost:3001/category").then((res) => res.data);

export const retrieveMealsOfCategory = (categoryPublicId) =>
  axios
    .get(`http://localhost:3001/meal/byCategory/${categoryPublicId}`)
    .then((res) => res.data);
