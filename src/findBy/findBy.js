import React, { useEffect, useState } from 'react'
import '../App.css';

export default function FindBy() {
    const [data, setData] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setData(true)
        }, 500);
    }, [])

    return (
        <div data-testid="div-test" className='App'>
            <h1>FindBy and FindAllBy | Test Async elements</h1>
            {
            data ? <h1>Data found</h1> : <h1>No Data Found</h1>
            }
        </div>
    )
}
