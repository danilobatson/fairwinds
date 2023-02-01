import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Player } from '@/types';

export interface GameState {
  value: number;
  loading: boolean;
  squares: (string | Boolean | null)[];
  currentPlayer: Player | boolean;
  matched: boolean;
  winner: Player;
  winRecord: {
    X: number;
    O: number;
  };
}

const initialState: GameState = {
  value: 0,
  loading: false,
  squares: Array(9).fill(null),
  currentPlayer: 'X',
  matched: false,
  winner: null,
  winRecord: {
    X: 0,
    O: 0,
  },
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSquares: (state, action: PayloadAction<(string | Boolean | null)[]>) => {
      state.squares = action.payload;
    },
    setCurrentPlayer: (state, action: PayloadAction<Player>) => {
      state.currentPlayer = action.payload;
    },
    setMatched: (state, action: PayloadAction<boolean>) => {
      state.matched = action.payload;
    },
    setWinner: (state, action: PayloadAction<Player>) => {
      state.winner = action.payload;
    },
    setWinRecord: (state, action: PayloadAction<{ X: number; O: number }>) => {
      state.winRecord = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  setSquares,
  setCurrentPlayer,
  setMatched,
  setWinner,
  setWinRecord,
} = gameSlice.actions;

export default gameSlice.reducer;
