import {useState} from 'react'
import "./signup.css"

export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')
    const [showPass, setShowPass] = useState(false)

    return (
        <div className="signup-form">
            <h1>Sign up</h1>

            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
            
            <label htmlFor="pass">Password</label>
            <input type={showPass ? 'text' : 'password'} id="pass" value={password} onChange={e => setPassword(e.target.value)} />

            <label htmlFor="conf-pass">Confirm Password</label>
            <input type={showPass ? 'text' : 'password'} id="conf-pass" value={confPass} onChange={e => setConfPass(e.target.value)} />

            <label htmlFor="show-pass">Show Password</label>
            <input type="checkbox" id="show-pass" checked={showPass} onChange={e => setShowPass(e.target.checked)} />

            <button>Signup</button>
        </div>
    )
}