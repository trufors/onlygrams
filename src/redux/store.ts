import { configureStore } from '@reduxjs/toolkit';
import fetchSlicer from './slices/fetchSlicer';
import profiSlicer from './slices/profiSlicer';
import promoteSlicer from './slices/promoteSlicer';
// ...

export const store = configureStore({
  reducer: {
    fetch: fetchSlicer,
    promote: promoteSlicer,
    profi: profiSlicer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
