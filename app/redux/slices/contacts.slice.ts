// import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { API_URL } from "../../utils/constants";

// const initialState = {
//     error: null,
//     loading: true
// };

// export const contactsAdapter = createEntityAdapter({});

// export const contactsSelector = contactsAdapter.getSelectors();

// export const addConsultaionContacts = createAsyncThunk(
//     "addConsultaionContacts",
//     async (
//         consultationData,
//         { rejectWithValue }
//     ) => {
//         try {
//             await axios.post(API_URL + "/consultationContacts", consultationData);
//         }
//         catch (error) {
//             toast.error("Ooops... Something went wrong!");
//             return rejectWithValue(error)
//         }
//     }
// )

// export const addSuggestionsContacts = createAsyncThunk(
//     'addSuggestionsContacts',
//     async (
//         suggestionsData,
//         { rejectWithValue }
//     ) => {
//         try {
//             await axios.post(API_URL + '/suggestionsContacts', suggestionsData)
//         }
//         catch (error) {
//             toast.error("you have a problem with suggestions post method(");
//             return rejectWithValue(error)
//         }
//     }
// )

// export const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: contactsAdapter.getInitialState(initialState),
//     reducers: {

//     },
//     extraReducers: {
//         [addConsultaionContacts.pending]: (state) => {
//             state.loading = true;
//             state.error = null;
//         },
//         [addConsultaionContacts.fulfilled]: (state) => {
//             state.loading = false;
//             state.error = null;
//         },
//         [addConsultaionContacts.rejected]: (state, error) => {
//             state.loading = false;
//             state.error = error;
//         },
//         [addSuggestionsContacts.pending]: (state) => {
//             state.loading = true;
//             state.error = null;
//         },
//         [addSuggestionsContacts.fulfilled]: (state) => {
//             state.loading = false;
//             state.error = null;
//         },
//         [addSuggestionsContacts.rejected]: (state, error) => {
//             state.loading = false;
//             state.error = error;
//         }
//     }
// })

// // export const { } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
let a = {}
export default a
