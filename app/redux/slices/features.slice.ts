import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
import { API_URL } from "app/utils/constants/api"

export interface FeatureItem {
  id: number
  title: string
  description: {
    kz: string
    ru: string
  }
  text: string
  text2: string
  img: string
}

export interface FeaturesState {
  error: any
  loading: boolean
  selectedItem: null | FeatureItem
  ids?: string[]
  entities?: {
    [key: string]: any
  }
}

const initialState: FeaturesState = {
  error: null,
  loading: true,
  selectedItem: null,
}

export const featuresAdapter = createEntityAdapter<FeatureItem>({})

export const featuresSelector = featuresAdapter.getSelectors()

export const fetchFeatures = createAsyncThunk<FeatureItem[]>(
  "fetchFeatures",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<FeatureItem[]>(API_URL + "/featuresInfo")
      return data
    } catch (error) {
      toast.error("Oops, error!")
      return rejectWithValue(error)
    }
  }
)

export const featuresSlice = createSlice({
  name: "features",
  initialState: featuresAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeatures.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchFeatures.rejected, (state, error) => {
        state.loading = false
        state.error = error
      })
      .addCase(fetchFeatures.fulfilled, (state, { payload: data }) => {
        state.loading = false
        state.error = null
        if (data[0] !== undefined) {
          state.selectedItem = data[0]
        }
        featuresAdapter.setAll(state, data)
      })
  },
})

// export const {
// } = featuresSlice.actions;

export const featuresReducer = featuresSlice.reducer
