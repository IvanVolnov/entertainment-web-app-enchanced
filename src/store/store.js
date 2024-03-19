import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('bookmarked')
  ? JSON.parse(localStorage.getItem('bookmarked'))
  : {
      movie: [],
      tv: [],
    };

const bookmarkedSlice = createSlice({
  name: 'bookmarked',
  initialState,
  reducers: {
    addBookmark(state, action) {
      state[action.payload.type].push(action.payload);
      localStorage.setItem('bookmarked', JSON.stringify(state));
    },
    removeBookmark(state, action) {
      // TODO search by name in trending films
      state[action.payload.type] = state[action.payload.type].filter(
        (el) => el.id !== action.payload.id
      );

      localStorage.setItem('bookmarked', JSON.stringify(state));
      console.log(state, 'remove');
    },
    findBoolmark(state) {
      console.log(state, 'find');
    },
  },
});

const store = configureStore({
  reducer: bookmarkedSlice.reducer,
});

export const { addBookmark, removeBookmark, findBookmark } =
  bookmarkedSlice.actions;

export default store;
