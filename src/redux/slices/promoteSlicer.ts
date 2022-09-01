import type { RootState } from '../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a type for the slice state
interface PromoteState {
  linkOnlyfans: string | undefined;
  mail: string | undefined;
  money: string | null;
  payment: string | null;
  paymentSale: string | null;
  days: string | null;
  info: string | null;
  descr: string | null;
}

// Define the initial state using that type
const initialState: PromoteState = {
  linkOnlyfans: undefined,
  mail: undefined,
  money: null,
  payment: null,
  paymentSale: null,
  days: null,
  info: null,
  descr: null,
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
    setOffer(state, action: PayloadAction<string[]>) {
      state.payment = action.payload[0];
      state.paymentSale = action.payload[1];
      state.days = action.payload[2];
      state.info = action.payload[3];
      state.descr = action.payload[4];
    },
  },
  extraReducers: {},
});

export const { setLinkOnlyfans, setMail, setMoney, setOffer } = promoteSlicer.actions;

export default promoteSlicer.reducer;
