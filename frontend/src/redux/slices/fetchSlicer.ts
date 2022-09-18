import type { RootState } from "../store"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

export const ITEMS_PER_PAGE = 8

// Define a type for the slice state
interface FetchState {
  items: GirlItem[]
  statusLoading: boolean
  girl: GirlItem | undefined
  statusLoadingProfile: boolean
  searchValue?: string
  categoryTag: string 
  currentPage: number
  total: number
}
export interface GirlItem {
  id: number
  createdAt: string
  email: string
  description: string
  name: string
  imageUrl: string
  links: {
    tiktok: string
    onlyFans: string
    instagram: string
  }
}

export interface FetchSearch {
  searchValue?: string
}

type FetchGirlsReply = {
  persons:GirlItem[], total: number
}

export const fetchGirlsItems = createAsyncThunk(
  "fetch/fetchGirlsItems",
  async (obj: FetchSearch, thunkAPI) => {
    try {
      const page: number = (thunkAPI.getState() as RootState).fetch.currentPage

      const params = {
        title: obj?.searchValue ? obj.searchValue.toLowerCase() : undefined,
        take: ITEMS_PER_PAGE,
        skip: ITEMS_PER_PAGE * (page - 1)
      }

      const response = await axios.get<FetchGirlsReply>("api/person/all", { params })

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("не удалось получить телочек")
    }
  }
)

export type ChangePagePayload = {
  page: number
}

export const changePage = createAsyncThunk(
  "fetch/changePage",
  async (obj: ChangePagePayload, thunkAPI) => {
    try {
      console.log(obj)
      const search: string = (thunkAPI.getState() as RootState).fetch.searchValue || ''

      const params = {
        title: search.toLowerCase(),
        take: ITEMS_PER_PAGE,
        skip: ITEMS_PER_PAGE * (obj.page - 1)
      }

      const response = await axios.get<{persons:GirlItem[], total: number}>("api/person/all", { params })

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue("не удалось получить телочек")
    }
  }
)

// Define the initial state using that type
const initialState: FetchState = {
  items: [],
  girl: undefined,
  statusLoading: false,
  statusLoadingProfile: false,
  searchValue: "",
  categoryTag: "New",
  currentPage: 1,
  total: 0
}

export const fetchSlicer = createSlice({
  name: "fetch",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clearGirl(state) {
      state.girl = undefined
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setCategoryTag(state, action: PayloadAction<string>) {
      state.categoryTag = action.payload
    },
    setStatusLoading(state, action: PayloadAction<boolean>) {
      state.statusLoading = action.payload
    }
  },
  extraReducers: {
    [fetchGirlsItems.pending.type]: (state) => {
      state.statusLoading = false
    },
    [fetchGirlsItems.fulfilled.type]: (state, action: PayloadAction<FetchGirlsReply>) => {
      state.items = action.payload.persons
      state.total = action.payload.total
      state.statusLoading = true
    },
    [fetchGirlsItems.rejected.type]: (state) => {},

    [changePage.fulfilled.type]: (state, {payload}: PayloadAction<FetchGirlsReply>) => {
      state.items = payload.persons
      state.total = payload.total
      state.statusLoading = true
    },
  }
})

export const {
  setStatusLoading,
  clearGirl,
  setPage,
  setSearchValue,
  setCategoryTag,
} = fetchSlicer.actions

export default fetchSlicer.reducer
