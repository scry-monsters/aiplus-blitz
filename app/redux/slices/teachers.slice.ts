// import {
//   createAsyncThunk,
//   createEntityAdapter,
//   createSlice,
// } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import Axios from "axios";
// import { API_URL } from "../../utils/constants";

// const initialState = {
//   error: null,
//   loading: true,
// };

// export const teachersAdapter = createEntityAdapter({});

// export const teachersSelector = teachersAdapter.getSelectors();

// export const fetchTeachers = createAsyncThunk(
//   "teachers/fetchTeachers",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await Axios.get(API_URL + "/teachers");

//       return data;
//     } catch (error) {
//       toast.error("Something went wrong!");
//       return rejectWithValue(error);
//     }
//   }
// );

// export const teachersSlice = createSlice({
//   name: "teachers",
//   initialState: teachersAdapter.getInitialState(initialState),
//   reducers: {},
//   extraReducers: {
//     [fetchTeachers.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [fetchTeachers.rejected]: (state, error) => {
//       state.loading = false;
//       state.error = error;
//     },
//     [fetchTeachers.fulfilled]: (state, data) => {
//       state.loading = false;
//       state.error = null;
//       teachersAdapter.setAll(state, data);
//     },
//   },
// });
// // export const {} = teachersSlice.actions;

// export const teachersReducer = teachersSlice.reducer;
let a = {}
export default a
