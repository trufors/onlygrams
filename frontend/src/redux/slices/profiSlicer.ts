import type { RootState } from '../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a type for the slice state
export interface TasksInputs {
  email: string;
  tg: string;
  descr: string;
  category: string;
  file: any;
}
interface ProfiState {
  tasks: TasksInputs[];
  statusLoading: boolean;
  currentPage: number;
  data: TasksInputs;
}
export interface FetchTasks {
  category: string;
  limit: number;
}
export const fetchTasksItems = createAsyncThunk(
  'profi/fetchTasksItems',
  async (obj: FetchTasks, thunkAPI) => {
    try {
      const response = await axios.get<TasksInputs[]>(
        `https://62ebbb5255d2bd170e74e421.mockapi.io`,
        {
          params: { category: obj.category, limit: 8 },
        },
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('не удалось получить задания на порно');
    }
  },
);

// Define the initial state using that type
const initialState: ProfiState = {
  tasks: [],
  statusLoading: false,
  currentPage: 1,
  data: {
    email: '',
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
  },
  extraReducers: {
    [fetchTasksItems.pending.type]: (state) => {
      state.statusLoading = false;
    },
    [fetchTasksItems.fulfilled.type]: (state, action: PayloadAction<TasksInputs[]>) => {
      state.tasks = action.payload;
      state.statusLoading = true;
    },
    [fetchTasksItems.rejected.type]: (state) => {},
  },
});

export const { setCurrentPage, setTasksData } = fetchSlicer.actions;

export default fetchSlicer.reducer;
