import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const res = await axios("http://localhost:3001/category");
    const data = await res.data;
    return data;
  }
);
