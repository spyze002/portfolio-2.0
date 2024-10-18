import { createSlice } from "@reduxjs/toolkit";


interface counterState{
    value: number
}

const initState : counterState ={
    value: 0
}

const  counterSlice  = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;