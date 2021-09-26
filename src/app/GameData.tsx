import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Icons from '../utils/Icons';
import { RootState } from './store';

type gameDataState = {
    loopItems: Array<LoopItem>
}

export const gameData = createSlice({
  name: 'tab',
  initialState: {
    loopItems: [
        {
            icon: Icons.hiking,
            primaryText: "Explore",
            secondaryText: "Dark Caverns",
            minutes: 30,
            repeats: 1,
            priority: 1,
        },
        {
            icon: Icons.hiking,
            primaryText: "Explore",
            secondaryText: "Dark Caverns",
            minutes: 60,
            repeats: 2,
            priority: 2,
        },
        {
            icon: Icons.hiking,
            primaryText: "Explore",
            secondaryText: "Dark Caverns",
            minutes: 120,
            repeats: 3,
            priority: 3,
        },
    ],
  } as gameDataState,
  reducers: {
    set: (state, action: PayloadAction<Array<LoopItem>>) => {
        state.loopItems = action.payload
    }
  },
});

export default gameData.reducer;
