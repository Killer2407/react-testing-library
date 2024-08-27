import React from 'react'
import '../App.css';

export default function JavaScriptQuery() {
    return (
        <div data-testid="div-test" className='App'>
            <h1> Test Elements with JavaScript Query | Custom Query</h1>
            <div id="testid">Hello World</div>

            <h1>Querying Within Elements</h1>
            <div> 
                Hi 
                <p>Hey What's up</p>
                <p>I am good</p>
                <p>Are you?</p>
            </div>
        </div>
    )
}
