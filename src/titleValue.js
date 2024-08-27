import React from 'react'
import './App.css';

export default function TitleValue() {
    return (
        <div data-testid="div-test" className='App'>
            <h1>RTL Query: Get By Title && Get All By Title</h1>
            <button title="testing">Testing</button>

            <br/>
            <br />
        <span title="emoji">&#9896;</span>
        <span title="emoji">&#9896;</span>
        </div>
    )
}
