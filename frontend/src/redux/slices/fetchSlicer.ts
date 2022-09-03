import type { RootState } from '../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a type for the slice state
interface FetchState {
  items: GirlItem[];
  statusLoading: boolean;
  girl: GirlItem | undefined;
  statusLoadingProfile: boolean;
  searchValue: string;
  categoryTag: string;
  currentPage: number;
}
export interface GirlItem {
  id: number;
  imageMinUrl: string;
  imageMaxUrl: string;
  title: string;
  link: string;
  tagName: string;
  description: string;
  categories: string;
  rating: Array<string>;
}

export interface FetchSearch {
  currentPage: number;
  searchValue: string;
}

export const fetchGirlsItems = createAsyncThunk(
  'fetch/fetchGirlsItems',
  async (obj: FetchSearch, thunkAPI) => {
    try {
      const searchModels = obj.searchValue ? `title=${obj.searchValue}` : '';
      const response = await axios.get<GirlItem[]>(
        `https://62ebbb5255d2bd170e74e421.mockapi.io/items?page=${obj.currentPage}&limit=8&${searchModels}`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('не удалось получить телочек');
    }
  },
);
export const fetchGirl = createAsyncThunk('fetch/fetchGirl', async (id: number, thunkAPI) => {
  try {
    const response = await axios.get<GirlItem>(
      `https://62ebbb5255d2bd170e74e421.mockapi.io/items/${id}`,
    );
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('не удалось получить телочек');
  }
});
// Define the initial state using that type
const initialState: FetchState = {
  items: [],
  girl: undefined,
  statusLoading: false,
  statusLoadingProfile: false,
  searchValue: '',
  categoryTag: 'New',
  currentPage: 1,
};

export const fetchSlicer = createSlice({
  name: 'fetch',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearGirl(state) {
      state.girl = undefined;
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryTag(state, action: PayloadAction<string>) {
      state.categoryTag = action.payload;
    },
    setStatusLoading(state, action: PayloadAction<boolean>) {
      state.statusLoading = action.payload;
    },
    setComponentDidMount(state, action: PayloadAction<FetchSearch>) {
      state.currentPage = action.payload.currentPage;
      state.searchValue = action.payload.searchValue;
    },
  },
  extraReducers: {
    [fetchGirl.pending.type]: (state) => {
      state.statusLoading = false;
    },
    [fetchGirl.fulfilled.type]: (state, action: PayloadAction<GirlItem>) => {
      state.girl = action.payload;
      state.statusLoading = true;
    },
    [fetchGirl.rejected.type]: (state) => {},
    [fetchGirlsItems.pending.type]: (state) => {
      state.statusLoading = false;
    },
    [fetchGirlsItems.fulfilled.type]: (state, action: PayloadAction<GirlItem[]>) => {
      state.items = action.payload;
      state.statusLoading = true;
    },
    [fetchGirlsItems.rejected.type]: (state) => {},
  },
});

export const {
  setStatusLoading,
  clearGirl,
  setPage,
  setSearchValue,
  setCategoryTag,
  setComponentDidMount,
} = fetchSlicer.actions;

export default fetchSlicer.reducer;