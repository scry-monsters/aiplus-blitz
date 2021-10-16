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

// export const allProgrammsAdapter = createEntityAdapter({});

// export const allProgrammsSelector = allProgrammsAdapter.getSelectors();

// export const fetchAllProgramms = createAsyncThunk(
//   `allProgramms/fetchAllProgramms`,
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await Axios.get(API_URL + "/allProgramms");
//       return data;
//     } catch (error) {
//       toast.error("Ooops... Something went wrong!");
//       return rejectWithValue(error);
//     }
//   }
// );

// export const allProgrammsSlice = createSlice({
//   name: "allProgramms",
//   initialState: allProgrammsAdapter.getInitialState(initialState),
//   reducers: {},
//   extraReducers: {
//     [fetchAllProgramms.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [fetchAllProgramms.rejected]: (state, error) => {
//       state.loading = false;
//       state.error = error;
//     },
//     [fetchAllProgramms.fulfilled]: (state, data) => {
//       state.loading = false;
//       state.error = null;
//       allProgrammsAdapter.setAll(state, data);
//     },
//   },
// });

// // export const {} = allProgrammsSlice.actions;

// export const allProgrammsReducer = allProgrammsSlice.reducer;
let a = {}
export default a
