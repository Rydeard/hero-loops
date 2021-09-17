import { createSlice } from '@reduxjs/toolkit';

type gameDataState = {
}

export const gameDataSlice = createSlice({
  name: 'tab',
  initialState: {
  } as gameDataState,
  reducers: {
    // set: (state, action) => {
    //     state.selectedTabIndex = action.payload
    // }
  },
});

export default gameDataSlice.reducer;
