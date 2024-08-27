import React, { useState } from 'react'
import '../App.css';

export default function ClickEvent() {
    const [data, setData] = useState("")
    return (
        <div data-testid="div-test" className='App'>
            <h1>Click Event with User Event Library</h1>
            <h1>{data}</h1>
            <button onClick={() => setData("Hello")}>Fire me</button>
        </div>
    )
}
