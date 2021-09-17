import { createSlice } from '@reduxjs/toolkit';

type tabState = {
    selectedTabIndex: number
}

export const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    selectedTabIndex: 0,
  } as tabState,
  reducers: {
    set: (state, action) => {
        state.selectedTabIndex = action.payload
    }
  },
});

export default tabSlice.reducer;
