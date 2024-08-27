import { useState } from "react"
import './App.css';

export const AppOne = () => {
    const [data, setData] = useState("")
    return (
        <div className="App">
            <p>Event Change Testing</p>
            <input type='text' value={data} onChange={(e) => setData(e.target.value)} />
            <button onClick={() => setData('Updated Data')}>Update Data</button>
            <h1>{data}</h1>
        </div>
    )
}
