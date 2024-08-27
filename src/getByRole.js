import React from 'react'
import './App.css';

export default function Getbyrole() {
    return (
        <div className='App'>
            <p>Get by role</p>
            <label htmlFor='input'>Name</label>
            <input type='text' defaultValue={'hello'} disabled id='input' />
            <button>Test</button>

            <h1>Multiple Item with Role</h1>
            <h1>Custom Role</h1>
            <button>Click One</button>
            <br />

            <label htmlFor='input1'>User:</label>
            <input type='text' id='input1'/>

            <div role='dummy'>
                Dummy
            </div>
        </div>
    )
}
