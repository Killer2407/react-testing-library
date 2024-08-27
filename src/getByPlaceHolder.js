import React from 'react'
import './App.css';

export default function GetByPlaceHolder() {
    return (
        <div className='App'>
            <h1>RTL Query: Get By PlaceHolder</h1>
            <input type='text' placeholder='enter username' defaultValue={"Aniket"} />

            <h1>RTL Query: Get All By PlaceHolder</h1>
            <input type='text' placeholder='enter password' defaultValue={"Aniket"} />
            <input type='text' placeholder='enter password' defaultValue={"Aniket"} />
        </div>
    )
}
