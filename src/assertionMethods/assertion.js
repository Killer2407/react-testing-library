import React from 'react'
import '../App.css';

export default function Assertion() {
    return (
        <div data-testid="div-test" className='App'>
            <h1>Different Types of Assertion Method</h1>
            <input type='text' defaultValue={"niket"} name='username' className='test' id='userName' data-test="data" disabled />
            <button className='button' disabled id="button-id">Click Me</button>
        </div>
    )
}
