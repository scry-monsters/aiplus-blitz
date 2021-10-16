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

// export const subjectsAdapter = createEntityAdapter({});

// export const subjectsSelector = subjectsAdapter.getSelectors();

// export const fetchSubjects = createAsyncThunk(
//   "subjects/fetchSubjects",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await Axios.get(API_URL + "/subjects");

//       return data;
//     } catch (error) {
//       toast.error("Something went wrong!");
//       return rejectWithValue(error);
//     }
//   }
// );

// export const subjectsSlice = createSlice({
//   name: "subjects",
//   initialState: subjectsAdapter.getInitialState(initialState),
//   reducers: {},
//   extraReducers: {
//     [fetchSubjects.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [fetchSubjects.rejected]: (state, error) => {
//       state.loading = false;
//       state.error = error;
//     },
//     [fetchSubjects.fulfilled]: (state, data) => {
//       state.loading = false;
//       state.error = null;
//       subjectsAdapter.setAll(state, data);
//     },
//   },
// });
// // export const {} = subjectsSlice.actions;

// export const subjectsReducer = subjectsSlice.reducer;
let a = {}
export default a
