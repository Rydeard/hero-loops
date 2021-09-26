import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gameDataReducer from "./GameData";

// what I added
const reducer = combineReducers({
  gameDataReducer: gameDataReducer
});

const store = configureStore({
    reducer: reducer,
  })

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch