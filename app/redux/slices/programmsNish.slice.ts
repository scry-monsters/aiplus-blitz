// import {
//   createAsyncThunk,
//   createEntityAdapter,
//   createSlice,
// } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
// import Axios from "axios";
// import { API_URL } from "../../utils/constants";

// const initialState = {
//   error: false,
//   loading: true,
// };

// export const programmsNishAdapter = createEntityAdapter({});

// export const programmsNishSelector = programmsNishAdapter.getSelectors();

// export const fetchProgrammsNish = createAsyncThunk(
//   `programmsNish/fetchProgrammsNish`,
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await Axios.get(`${API_URL}/programmsNish`);
//       return data;
//     } catch (error) {
//       toast.error("Ooops... Something went wrong!");
//       return rejectWithValue(error);
//     }
//   }
// );

// export const postProgrammsNish = createAsyncThunk(
//   `programmsNish/postProgrammsNish`,
//   async (info, { rejectWithValue }) => {
//     try {
//       await Axios.post(`${API_URL}/passTheTest`, info);
//     } catch (error) {
//       toast.error("Ooops... Something went wrong!");
//       return rejectWithValue(error);
//     }
//   }
// );

// export const programmsNishSlice = createSlice({
//   name: "programmsNish",
//   initialState: programmsNishAdapter.getInitialState(initialState),
//   reducers: {},
//   extraReducers: {
//     [fetchProgrammsNish.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [fetchProgrammsNish.rejected]: (state, error) => {
//       state.loading = false;
//       state.error = error;
//     },
//     [fetchProgrammsNish.fulfilled]: (state, data) => {
//       state.loading = false;
//       state.error = null;
//       programmsNishAdapter.setAll(state, data);
//     },

//     [postProgrammsNish.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [postProgrammsNish.rejected]: (state, error) => {
//       state.loading = false;
//       state.error = error;
//     },
//     [postProgrammsNish.fulfilled]: (state, data) => {
//       state.loading = false;
//       state.error = null;
//     },
//   },
// });

// // export const {} = programmsNishSlice.actions;

// export const programmsNishReducer = programmsNishSlice.reducer;
let a = {}
export default a
