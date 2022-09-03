import type { RootState } from '../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a type for the slice state
interface ProfiState {
  tasks: TasksItem[];
  statusLoading: boolean;
  currentPage: number;
}
export interface TasksItem {
  id: number;
  descr: string;
}

// export const fetchGirlsItems = createAsyncThunk(
//   'fetch/fetchGirlsItems',
//   async (obj: FetchSearch, thunkAPI) => {
//     try {
//       const searchModels = obj.searchValue ? `title=${obj.searchValue}` : '';
//       const response = await axios.get<GirlItem[]>(
//         `https://62ebbb5255d2bd170e74e421.mockapi.io/items?page=${obj.currentPage}&limit=8&${searchModels}`,
//       );
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue('не удалось получить телочек');
//     }
//   },
// );

// Define the initial state using that type
const initialState: ProfiState = {
  tasks: [],
  statusLoading: false,
  currentPage: 1,
};

export const fetchSlicer = createSlice({
  name: 'profi',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    // [fetchGirl.pending.type]: (state) => {
    //   state.statusLoading = false;
    // },
    // [fetchGirl.fulfilled.type]: (state, action: PayloadAction<GirlItem>) => {
    //   state.girl = action.payload;
    //   state.statusLoading = true;
    // },
    // [fetchGirl.rejected.type]: (state) => {},
  },
});

export const { setCurrentPage } = fetchSlicer.actions;

export default fetchSlicer.reducer;
