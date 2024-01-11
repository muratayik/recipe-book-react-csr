import { createAsyncThunk } from "@reduxjs/toolkit";

import * as ApiUtils from "../../utils/api.utils";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => await ApiUtils.get("/category")
);
