import { useState } from "react"
import axios from "axios"

export default function AddAdmin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePass = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/login', {
            email,
            password,
        })
        .then((res) => {
            setEmail('')
            setPassword('')
            localStorage.setItem('access_token', res.data.access_token)
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    
    
    return (
        <div className="justify-between items-center bg-slate-600 text-white rounded-lg p-5 m-10 mt-5 mb-5 h-max ">
            <form onSubmit={handleLogin}>
                <div className="form-control w-full">
                    <label className="input-group">
                        <span>Email</span>
                        <input type="email" placeholder="info@site.com" className="input input-bordered w-full" 
                        value={email}
                        onChange={onChangeEmail}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span>Password</span>
                        <input type="text" className="input input-bordered w-full" 
                        value={password}
                        onChange={onChangePass}
                        />
                    </label>
                </div>
                <button className="btn btn-primary"
                type="submit"
                >Login</button>
            </form>
        </div>
    )
}