import React from 'react'
import '../App.css';
import User from './User';

export default function PropsComponent() {

    return (
        <div data-testid="div-test" className='App'>
            <h1>Test Compnent Props</h1>
            <User 
                name="Aniket"
            />
            
        </div>
    )
}
