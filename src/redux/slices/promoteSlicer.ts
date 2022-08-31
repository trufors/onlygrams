import type { RootState } from '../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a type for the slice state
interface PromoteState {
  linkOnlyfans: string | undefined;
  mail: string | undefined;
  money: string | null;
}

// Define the initial state using that type
const initialState: PromoteState = {
  linkOnlyfans: undefined,
  mail: undefined,
  money: null,
};

export const promoteSlicer = createSlice({
  name: 'promote',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLinkOnlyfans(state, action: PayloadAction<string>) {
      state.linkOnlyfans = action.payload;
      console.log(state.linkOnlyfans);
    },
    setMail(state, action: PayloadAction<string>) {
      state.mail = action.payload;
    },
    setMoney(state, action: PayloadAction<string>) {
      state.money = action.payload;
    },
  },
  extraReducers: {},
});

export const { setLinkOnlyfans, setMail, setMoney } = promoteSlicer.actions;

export default promoteSlicer.reducer;
// export const fetchGirlsItems = createAsyncThunk('fetch/fetchGirlsItems', async (_, thunkAPI) => {
//   try {
//     const response = await axios.get<GirlItem[]>(
//       `https://62ebbb5255d2bd170e74e421.mockapi.io/items`,
//     );
//     return response.data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue('не удалось получить телочек');
//   }
// });
