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

// export const faqAdapter = createEntityAdapter({});

// export const faqSelector = faqAdapter.getSelectors();

// export const fetchFaq = createAsyncThunk(
//   `faq/fetchFaq`,
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await Axios.get(`${API_URL}/faq`);
//       return data;
//     } catch (error) {
//       toast.error("Ooops... Something went wrong!");
//       return rejectWithValue(error);
//     }
//   }
// );

// export const postFaq = createAsyncThunk(
//   `faq/postFaq`,
//   async (questions, { rejectWithValue }) => {
//     try {
//       await Axios.post(`${API_URL}/faqQuestion`, questions);
//     } catch (error) {
//       toast.error("Ooops... Something went wrong!");
//       return rejectWithValue(error);
//     }
//   }
// );

// export const faqSlice = createSlice({
//   name: "faq",
//   initialState: faqAdapter.getInitialState(initialState),
//   reducers: {},
//   extraReducers: {
//     [fetchFaq.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [fetchFaq.rejected]: (state, error) => {
//       state.loading = false;
//       state.error = error;
//     },
//     [fetchFaq.fulfilled]: (state, data) => {
//       state.loading = false;
//       state.error = null;
//       faqAdapter.setAll(state, data);
//     },

//     [postFaq.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [postFaq.rejected]: (state, error) => {
//       state.loading = false;
//       state.error = error;
//     },
//     [postFaq.fulfilled]: (state, data) => {
//       state.loading = false;
//       state.error = null;
//     },
//   },
// });

// // export const {} = faqSlice.actions;

// export const faqReducer = faqSlice.reducer;
let a = {}
export default a
