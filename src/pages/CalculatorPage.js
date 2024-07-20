import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOperand1, setOperand2, setOperation, calculate, reset } from '../store/calculatorSlice';

function CalculatorPage() {
    const { operand1, operand2, result, operation } = useSelector((state) => state.calculatorSlice);
    const dispatch = useDispatch();

    const handleOperand1Change = (e) => {
        dispatch(setOperand1(e.target.value));
    };

    const handleOperand2Change = (e) => {
        dispatch(setOperand2(e.target.value));
    };

    return (
        <div className="App">
            <h1>Calculator</h1>
            <div>
                <input type="text" value={operand1} onChange={handleOperand1Change} placeholder="enter operand"/>
                <input type="text" value={operand2} onChange={handleOperand2Change} placeholder="enter operand"/><br/>
                <p>выберите операцию</p>

                <div style={{margin: "30px auto", display: "flex", gap: "10px", width: "160px"}}>
                    <button onClick={() => dispatch(setOperation('add'))}>+</button>
                    <button onClick={() => dispatch(setOperation('subtract'))}>-</button>
                    <button onClick={() => dispatch(setOperation('multiply'))}>*</button>
                    <button onClick={() => dispatch(setOperation('divide'))}>/</button>
                    <button onClick={() => dispatch(reset())}>C</button>
                </div>
                <p>получить результат</p>
                <button onClick={() => dispatch(calculate())}>=</button>

            </div>
            <h2>равно: {result}</h2>
        </div>
    );
}

export default CalculatorPage;