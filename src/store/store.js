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
      state[action.payload.type] = state[action.payload.type].filter((el) => {
        return el.id !== action.payload.id;
      });
      localStorage.setItem('bookmarked', JSON.stringify(state));
    },
  },
});

const store = configureStore({
  reducer: bookmarkedSlice.reducer,
});

export const { addBookmark, removeBookmark } = bookmarkedSlice.actions;

export default store;
