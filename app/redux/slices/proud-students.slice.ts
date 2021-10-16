// import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
// import {toast} from 'react-toastify'
// import axios from "axios"
// import { API_URL } from "../../utils/constants"

// const initialState = {
//     students: [
//         { id: 1, name: 'Баянов Амир', before: 690, after: 987, year: 2018, img: 'https://aiplus.kz/student_img/s1554884109_student_img.jpeg', school: 'НИШ' },
//         { id: 2, name: 'Ахметов Дархан', before: 572, after: 967, year: 2017, img: 'https://aiplus.kz/student_img/s1554886800_student_img.jpeg', school: 'НИШ' },
//         { id: 3, name: 'Тастемір Данеля', before: 680, after: 922, year: 2018, img: 'https://aiplus.kz/student_img/s1554886947_student_img.jpeg', school: 'РФМШ' },
//         { id: 4, name: 'Бұрақожаева Диана', before: 680, after: 922, year: 2016, img: 'https://aiplus.kz/student_img/s1554886947_student_img.jpeg', school: 'РФМШ' },
//         { id: 5, name: 'Галиева Зулейха-Даурия', before: 345, after: 891, year: 2018, img: 'https://aiplus.kz/student_img/s1554886947_student_img.jpeg', school: 'РФМШ' },
//         { id: 6, name: 'Еркін Айгерім', before: 790, after: 904, year: 2018, img: 'https://aiplus.kz/student_img/s1554886947_student_img.jpeg', school: 'РФМШ' },
//         { id: 7, name: 'Аманкелды Жан', before: 560, after: 870, year: 2016, img: 'https://aiplus.kz/student_img/s1554886947_student_img.jpeg', school: 'РФМШ' },
//     ],
//     loading: false,
//     error: null
// }

// export const proudStudentsAdapter = createEntityAdapter({})
// export const proudStudentsSelector = proudStudentsAdapter.getSelectors()

// export const fetchProudStudents =  createAsyncThunk(
//     'proudStudents/fetchProudStudents',
//     async (_, {rejectWithValue}) => {
//         try {
//             const {data} = axios.get(API_URL + '/proud-students')
//             return data
//         } catch (error) {
//             toast.error('Somethinkg went wrong!')
//             return rejectWithValue(error)
//         }
//     }
// )

// export const proudStudentsSlice = createSlice({
//     name: 'proudStudents',
//     initialState: proudStudentsAdapter.getInitialState(initialState),
//     reducers:{},
//     extraReducers:{
//         [fetchProudStudents.pending]: (state) => {
//             state.loading = true
//             state.error = null
//         },

//         [fetchProudStudents.rejected]: (state, error) => {
//             state.loading = false;
//             state.error = error;
//         },

//         [fetchProudStudents.fulfilled]: (state, data) => {
//             state.loading = false
//             state.error = null
//             proudStudentsAdapter.setAll(state, data)
//         }
//     }
// })

// // export const {} = proudStudentsSlice.actions

// export const proudStudentsReducer = proudStudentsSlice.reducer
let a = {}
export default a
