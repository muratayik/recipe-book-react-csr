import { createAsyncThunk } from "@reduxjs/toolkit";

import * as ApiUtils from "../../utils/api.utils";

export const fetchMealsOfCategory = createAsyncThunk(
  "meal/fetchMealsOfCategory",
  async (categoryPublicId) =>
    await ApiUtils.get(`/meal/byCategory/${categoryPublicId}`)
);

export const fetchMealDetail = createAsyncThunk(
  "meal/fetchMealDetail",
  async (mealPublicId) => await ApiUtils.get(`/meal/${mealPublicId}/detail`)
);
