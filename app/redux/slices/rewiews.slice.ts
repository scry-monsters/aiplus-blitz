// import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
// import { toast } from 'react-toastify';
// import Axios from 'axios';
// import { API_URL } from "../../utils/constants";

// const initialState = {
//     error: null,
//     loading: true,
// };

// export const rewiewsAdapter = createEntityAdapter({});

// export const rewiewsSelector = rewiewsAdapter.getSelectors();

// export const fetchRewiews = createAsyncThunk(
//     "rewiews/fetchRewiews",
//     async (
//         _,
//         { rejectWithValue }
//     ) => {
//         try {
//             const { data } = await Axios.get(API_URL + '/rewiews')
//             return data
//         } catch (error) {
//             toast.error("Ooops... Something went wrong!");
//             return rejectWithValue(error);
//         }

//     },
// )

// export const addMockTest = createAsyncThunk(
//     "rewiews/addMockTest",
//     async (
//         mockTest,
//         { rejectWithValue }
//     ) => {
//         try {
//             await Axios.post(API_URL + '/mockTestRewiews', mockTest)
//             toast.success("We will contact you shortly");
//         } catch (error) {
//             toast.error("Ooops... Something went wrong!");
//             return rejectWithValue(error);
//         }
//     }
// )

// export const rewiewsSlice = createSlice({
//     name: "rewiews",
//     initialState: rewiewsAdapter.getInitialState(initialState),
//     reducers: {

//     },
//     extraReducers: {
//         [fetchRewiews.pending]: (state) => {
//             state.loading = true;
//             state.error = null;
//         },
//         [fetchRewiews.rejected]: (state, error) => {
//             state.loading = false;
//             state.error = error;
//         },
//         [fetchRewiews.fulfilled]: (state, data) => {
//             state.loading = false;
//             state.error = null;
//             rewiewsAdapter.setAll(state, data);
//         },
//         [addMockTest.pending]: (state) => {
//             state.loading = true;
//             state.error = null;
//         },
//         [addMockTest.rejected]: (state, error) => {
//             state.loading = false;
//             state.error = error;
//         },
//         [addMockTest.fulfilled]: (state, data) => {
//             state.loading = false;
//             state.error = null;
//         },
//     }
// })

// // export const {
// // } = rewiewsSlice.actions;

// export const rewiewsReducer = rewiewsSlice.reducer;
let a = {}
export default a
