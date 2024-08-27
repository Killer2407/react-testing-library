import React, { useState } from 'react'
import './App.css';

function SnapShot() {
    const [data, setData] = useState("")
    return (
        <div className='App'>
            <p>SnapShot</p>
            <button onClick={() => setData('Updated Data')}>Update Data</button>
            <h1>{data}</h1>
        </div>
    )
}

export default SnapShot
