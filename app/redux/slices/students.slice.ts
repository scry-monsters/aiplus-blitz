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
//   ids: [],
//   entities: {},
// };

// export const studentsAdapter = createEntityAdapter({});

// export const studentsSelector = studentsAdapter.getSelectors();

// export const fetchStudents = createAsyncThunk(
//   "students/fetchStudents",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await Axios.get(API_URL + "/students");
//       return data;
//     } catch (error) {
//       toast.error("Ooops... Something went wrong!");
//       return rejectWithValue(error);
//     }
//   }
// );

// export const studentsSlice = createSlice({
//   name: "students",
//   initialState: studentsAdapter.getInitialState(initialState),
//   reducers: {},
//   extraReducers: {
//     [fetchStudents.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [fetchStudents.rejected]: (state, error) => {
//       state.loading = false;
//       state.error = error;
//     },
//     [fetchStudents.fulfilled]: (state, data) => {
//       state.loading = false;
//       state.error = null;
//       studentsAdapter.setAll(state, data);
//     },
//   },
// });

// // export const {} = studentsSlice.actions;

// export const studentsReducer = studentsSlice.reducer;
let a = {}
export default a
