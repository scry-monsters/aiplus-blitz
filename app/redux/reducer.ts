import { combineReducers } from "redux"
// import { allProgrammsReducer } from "./slices/allProgramms.slice";
// import { faqReducer } from "./slices/faq.slice";
// import { programmsNishReducer } from "./slices/programmsNish.slice";
// import { contactsReducer } from "./slices/contacts.slice";
import { featuresReducer } from "./slices/features.slice"
// import { rewiewsReducer } from "./slices/rewiews.slice";
// import { proudStudentsReducer } from "./slices/proud-students.slice";
// import { studentsReducer } from "./slices/students.slice";
// import { subjectsReducer } from "./slices/subjects.slice";
// import { teachersReducer } from "./slices/teachers.slice";

export const rootReducer = combineReducers({
  // students: studentsReducer,
  // teachers: teachersReducer,
  // subjects: subjectsReducer,
  // allProgramms: allProgrammsReducer,
  // programmsNish: programmsNishReducer,
  // faq: faqReducer,
  // rewiews: rewiewsReducer,
  // contacts: contactsReducer,
  features: featuresReducer,
  // proudStudents: proudStudentsReducer,
})
