import React, { useState } from 'react'
import './App.css';
import { handleOther } from './helper';

export const Functional = () => {
    const [data, setData] = useState("")

    const handleData = () => {
        setData('Hello testing is going on')
    }

    return (
        <div className="App">
            <p>Testing Functional Component</p>
            <button data-testid="btn-1" onClick={handleData}>Update</button>
            <button onClick={handleOther}>Print</button>
            <h2>{data}</h2>
        </div>
    )
}
