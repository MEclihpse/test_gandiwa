import { useState } from "react"
import axios from "axios"

export default function AddAdmin() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const onChangeUsername = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePass = (e) => {
        setPassword(e.target.value)
    }

    const onChangeRole = (e) => {
        setRole(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/users', {
            name,
            email,
            password,
            role
        })
        .then((res) => {
            setName('')
            setEmail('')
            setPassword('')
            setRole('')
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    
    
    return (
        <div className="justify-between items-center bg-slate-600 text-white rounded-lg p-5 m-10 mt-5 mb-5 h-max ">
            <form onSubmit={handleRegister}>
                <div className="form-control w-full">
                    <label className="input-group">
                        <span>Username</span>
                        <input type="text" placeholder="John Doe" className="input input-bordered w-full" 
                        value={name}
                        onChange={onChangeUsername}
                        />
                    </label>
                </div>
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
                <div className="form-control">
                    <label className="input-group">
                        <span>role</span>
                        <input type="text" placeholder="Address" className="input input-bordered w-full" 
                        value={role}
                        onChange={onChangeRole}
                        />
                    </label>
                </div>
                <button className="btn btn-primary"
                type="submit"
                >Register</button>
            </form>
        </div>
    )
}