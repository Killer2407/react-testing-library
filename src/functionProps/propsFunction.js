import React from 'react'
import '../App.css';

export default function PropsComponent(props) {
    const {testFunction} = props

    return (
        <div data-testid="div-test" className='App'>
            <h1>Function Props Testing & Mocking</h1>
            <button onClick={testFunction}>Fire Me</button>
        </div>
    )
}
