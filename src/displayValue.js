import React from 'react'
import './App.css';

export default function DisplayValue() {
    return (
        <div data-testid="div-test" className='App'>
            <h1>RTL Query: Get By Display Value && Get All By Display Value</h1>

            <input type="text" defaultValue={"Aniket"} />
            <input type="text" defaultValue={"Aniket"} />
            <textarea defaultValue={"Aniket Munim"} />
            <input type="radio" defaultValue={"Male"} />

        </div>
    )
}
