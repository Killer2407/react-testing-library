import React from 'react'
import './App.css';

export default function AltText() {
    return (
        <div data-testid="div-test" className='App'>
            <h1>RTL Query: Get By Alt Text && Get All By Alt Text</h1>
            <img src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg' style={{width: 300, height: 300}} alt='feather' />
                <br />
                <br />
            <img src='	https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg' style={{width: 300, height: 300}} alt='animal' />
                <br />
            <img src='	https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg' style={{width: 300, height: 300}} alt='animal' />
        </div>
    )
}
