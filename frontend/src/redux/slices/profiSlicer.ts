import type { RootState } from '../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const TASKS_PER_PAGE: number = 8;

export interface TasksInputs {
  sub: string;
  tg: string;
  descr: string;
  category: string;
  file: any;
  price: string;
}
export interface FetchTasks {
  category: string;
  limit: number;
}
interface ProfiState {
  total: number;
  tasks: TasksInputs[];
  activeCategory: string;
  statusLoading: boolean;
  currentPage: number;
  data: TasksInputs;
}

// export const Category: {
//   FILM: 'FILM',
//   PROMO: 'PROMO',
//   PHOTO: 'PHOTO',
//   ESCORT: 'ESCORT',
//   OTHER: 'OTHER'
// };

type FetchTasksReply = {
  tasks: TasksInputs[];
  total: number;
};
type FetchSearch = {
  activeCategory?: string;
};
export const fetchTasksItems = createAsyncThunk(
  'profi/fetchTasksItems',
  async (obj: FetchSearch, thunkAPI) => {
    try {
      const page: number = (thunkAPI.getState() as RootState).profi.currentPage;
      const category: string = (
        thunkAPI.getState() as RootState
      ).profi.activeCategory.toUpperCase();

      const params = {
        category: category !== 'ALL' ? category : undefined,
        take: TASKS_PER_PAGE,
        skip: TASKS_PER_PAGE * (page - 1),
      };

      const response = await axios.get<FetchTasksReply>('api/task/all', { params });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('не удалось получить тacочки');
    }
  },
);

// Define the initial state using that type
const initialState: ProfiState = {
  total: 0,
  tasks: [],
  statusLoading: false,
  currentPage: 1,
  activeCategory: 'all',
  data: {
    price: '',
    sub: '',
    tg: '',
    descr: '',
    category: '',
    file: '',
  },
};

export const fetchSlicer = createSlice({
  name: 'profi',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setTasksData(state, action: PayloadAction<TasksInputs>) {
      state.data = action.payload;
    },
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: {
    [fetchTasksItems.pending.type]: (state, action: { meta: { arg: FetchSearch } }) => {
      state.statusLoading = false;
      state.activeCategory = action.meta.arg.activeCategory || 'all';
    },
    [fetchTasksItems.fulfilled.type]: (state, action: PayloadAction<FetchTasksReply>) => {
      state.tasks = action.payload.tasks;
      state.total = action.payload.total;
      state.statusLoading = true;
    },
    [fetchTasksItems.rejected.type]: (state) => {},
  },
});

export const { setCurrentPage, setTasksData, setActiveCategory } = fetchSlicer.actions;

export default fetchSlicer.reducer;
