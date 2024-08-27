import React from 'react'
import './App.css';

export default function GetByLabelText() {
    return (
        <div className='App'>
            <h1>RTL Query: Get By Label Text</h1>
            <label htmlFor='user'>User</label>
            <input type='text' id='user' defaultValue={"Aniket"}/>
            
            <label htmlFor='skills'>Skills</label>
            <input type='checkbox' id='skills' defaultChecked={true}/>
            
        </div>
    )
}
