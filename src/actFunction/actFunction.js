import React, { useState } from 'react'
import '../App.css';

export default function ActFunction() {
    const [name, setName] = useState("")

    return (
        <div data-testid="div-test" className='App'>
            <h1>Act Function</h1>
            <h2>{name}</h2>
            <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter name' />
            
        </div>
    )
}
