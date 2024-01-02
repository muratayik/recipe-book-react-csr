import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMealsOfCategory = createAsyncThunk(
  "meal/fetchMealsOfCategory",
  async (categoryPublicId) => {
    const res = await axios(
      `http://localhost:3001/meal/byCategory/${categoryPublicId}`
    );
    const data = await res.data;
    return data;
  }
);

export const fetchMealDetail = createAsyncThunk(
  "meal/fetchMealDetail",
  async (mealPublicId) => {
    const res = await axios(
      `http://localhost:3001/meal/${mealPublicId}/detail`
    );
    const data = await res.data;
    return data;
  }
);
