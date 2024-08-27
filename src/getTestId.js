import React from 'react'
import './App.css';

export default function TestId() {
    return (
        <div data-testid="div-test" className='App'>
            <h1>RTL Query: Get By Test Id</h1>

        <div data-testid="div-test">
            {/* <h2 element-id='h2'>Testing Tag</h2> */}
            <h2 data-testid='h2'>Testing Tag</h2>
        </div>
        </div>
    )
}
