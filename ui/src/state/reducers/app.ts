import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface appState {
	display: boolean;
}

const initialState: appState = {
	display: true,
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setDisplay: (state, action: PayloadAction<boolean>) => {
			state.display = action.payload;
		},
	},
});

export const { setDisplay } = appSlice.actions;

export default appSlice.reducer;
