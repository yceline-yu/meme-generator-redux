// import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = { memes: []}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      let currentMemes = [...state.memes, action.payload];
      return { ...state, memes: currentMemes };
    case "DELETE":
      let updatedMemes = state.memes.filter(val => val.id !== action.payload.id);
      return { ...state, memes: updatedMemes };
    default:
      return state;  
  }
}

// const createReducer = createSlice({
//   name:"memes",
//   initialState: {
//     value:[]
//   },
//   reducers: {
//     add: (state, action) => {
//       state.value.push(action.payload);
//     },
//     delete: (state, action) => {
//       state.value.filter(val => val.id !== action.payload.id);
//     }
//   }
// });

export default rootReducer;

// export { createReducer }