import React, { useEffect, useState } from 'react'
import '../App.css';
import axios from 'axios';

export default function MockServices() {

    const [data, setData] = useState([])

    const getData = async() => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users")
        setData(result?.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div data-testid="div-test" className='App'>
            <h1>Mock Service Worker</h1>
            <ul>
            {
                data?.map((item) => {
                    return (
                        <li key={item.id}>{item?.name}</li>
                    )
                })
            }
            </ul>
        </div>
    )
}
