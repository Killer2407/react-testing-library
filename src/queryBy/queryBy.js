import React from 'react'
import '../App.css';

export default function QueryBy() {
    let login = true
    return (
        <div data-testid="div-test" className='App'>
            <h1>QueryBy and QueryAllBy | Test hidden elements</h1>
            {
                login?<button>Logout</button>:<button>Login</button>
            }
        </div>
    )
}
