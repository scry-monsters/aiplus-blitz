import { Ctx } from "blitz"
import { createAsyncThunk, createSlice, SliceCaseReducers } from "@reduxjs/toolkit"
import getMenuItems from "app/menu-items/queries/getMenuItems"
import { MenuItem } from "db"

interface MenuState {
  menuItems: (MenuItem & {
    children: MenuItem[]
  })[]
}

const initialState = {
  menuItems: [],
}

export const fetchMenuItems = createAsyncThunk("menu/fetchMenuItems", async () => {
  const { menuItems } = await getMenuItems(
    {
      orderBy: {
        orderNumber: "asc",
      },
    },
    {} as Ctx
  )
  console.log(menuItems)
  return menuItems
})

export const menuSlice = createSlice<MenuState, SliceCaseReducers<MenuState>>({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenuItems.fulfilled, (state, { payload: data }) => {
      state.menuItems = data
    })
  },
})

// export const {

// } = menuSlice.actions

export const menuReducer = menuSlice.reducer
