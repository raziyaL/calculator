import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    operand1: '',
    operand2: '',
    result: 0,
    operation: null,
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setOperand1: (state, action) => {
            state.operand1 = action.payload;
        },
        setOperand2: (state, action) => {
            state.operand2 = action.payload;
        },
        setOperation: (state, action) => {
            state.operation = action.payload;
        },
        calculate: (state) => {
            const num1 = Number(state.operand1);
            const num2 = Number(state.operand2);
            switch (state.operation) {
                case 'add':
                    state.result = num1 + num2;
                    break;
                case 'subtract':
                    state.result = num1 - num2;
                    break;
                case 'multiply':
                    state.result = num1 * num2;
                    break;
                case 'divide':
                    if (num2 !== 0) {
                        state.result = num1 / num2;
                    } else {
                        alert('Cannot divide by zero!');
                    }
                    break;
                default:
                    state.result = 0;
            }
        },
        reset: (state) => {
            state.operand1 = '';
            state.operand2 = '';
            state.result = 0;
            state.operation = null;
        },
    },
});

export const { setOperand1, setOperand2, setOperation, calculate, reset } = calculatorSlice.actions;

export default calculatorSlice.reducer;