import React from 'react'
import './App.css';

export default function GetAllByLabel() {
    return (
        <div className='App'>
            <h1>RTL Query: Get All By Label Text</h1>
            <label htmlFor='user'>User</label>
            <input type='text' id='user' defaultValue={"Anik"}/>

            <label htmlFor='user2'>User</label>
            <input type='text' id='user2' defaultValue={"Anik"}/>

            <label htmlFor='user3'>User</label>
            <input type='text' id='user3' defaultValue={"Anik"}/>

            <label htmlFor='skills'>Skills</label>
            <input type='checkbox' id='skills' defaultChecked={true}/>

            <label htmlFor='skills1'>Skills</label>
            <input type='checkbox' id='skills1' defaultChecked={true}/>
            
        </div>
    )
}
