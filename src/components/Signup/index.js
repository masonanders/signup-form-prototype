import {useState} from 'react'
import "./signup.css"

export default function Signup({ onSignup }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confPass, setConfPass] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [error, setError] = useState(false)

    function fieldsAreValid() {
        return !!username && !!password && password === confPass
    }

    function submit() {
        if (fieldsAreValid()) {
            onSignup(username)
        } else {
            setError(true)
        }
    }

    return (
        <div className="signup-form">
            <h1>Sign up</h1>

            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} error={String(error && !!username)} />
            
            <label htmlFor="pass">Password</label>
            <input type={showPass ? 'text' : 'password'} id="pass" value={password} onChange={e => setPassword(e.target.value)} error={String(error && (!!password || password !== confPass))} />

            <label htmlFor="conf-pass">Confirm Password</label>
            <input type={showPass ? 'text' : 'password'} id="conf-pass" value={confPass} onChange={e => setConfPass(e.target.value)} error={String(error && (!!confPass || password !== confPass))} />

            <label htmlFor="show-pass">Show Password</label>
            <input type="checkbox" id="show-pass" checked={showPass} onChange={e => setShowPass(e.target.checked)} />

            <button disabled={error && !fieldsAreValid()} onClick={submit}>Sign up</button>
            
            { error && (
                <div>
                    {!username && <p>Username is required</p>}
                    {!(password || confPass) && <p>Password is required</p>}
                    {password !== confPass && <p>Passwords must match</p>}
                </div>
            ) }
        </div>
    )
}