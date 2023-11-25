import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAppState {
    valueOne: string
    valueTwo: string
    buttonClicked: boolean
}

const initialState: IAppState = {
    valueOne: "",
    valueTwo: null,
    buttonClicked: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetState: () => initialState,
    setState: (state, action: PayloadAction<IAppState>) => {
        return {
            ...state,
            ...action.payload
        }
    },
    setValueOne: (state, action: PayloadAction<string>) => {
        state.valueOne = action.payload
    },
    setValueTwo: (state, action: PayloadAction<string>) => {
        state.valueTwo = action.payload
    },
    setButtonClicked: (state, action: PayloadAction<boolean>) => {
        state.buttonClicked = action.payload
    }
  },
})

export const { resetState, setValueOne, setValueTwo, setButtonClicked } = appSlice.actions

export default appSlice.reducer
