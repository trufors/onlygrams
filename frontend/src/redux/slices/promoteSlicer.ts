import type { RootState } from '../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface promoteInput {
  email: string;
  link: string;
  tiktok: string;
  inst: string;
  name: string;
  file: any;
  descr: string;
}

interface PromoteState {
  data: promoteInput;
  money: string | null;
  payment: string | null;
  paymentSale: string | null;
  days: string | null;
  info: string | null;
  descr: string | null;
}

// Define the initial state using that type
const initialState: PromoteState = {
  money: null,
  payment: null,
  paymentSale: null,
  days: null,
  info: null,
  descr: null,
  data: {
    email: '',
    link: '',
    tiktok: '',
    inst: '',
    name: '',
    file: null,
    descr: '',
  },
};

export const promoteSlicer = createSlice({
  name: 'promote',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMoney(state, action: PayloadAction<string>) {
      state.money = action.payload;
    },
    setOffer(state, action: PayloadAction<string[]>) {
      state.payment = action.payload[0];
      state.paymentSale = action.payload[1];
      state.days = action.payload[2];
      state.info = action.payload[3];
      state.descr = action.payload[4];
    },
    setData(state, action: PayloadAction<promoteInput>) {
      state.data = action.payload;
    },
  },
  extraReducers: {},
});

export const { setData, setMoney, setOffer } = promoteSlicer.actions;

export default promoteSlicer.reducer;
