import { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"

export default function TableCasts() {
    const [user, setUser] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3000/api/users')
        .then((res) => {
         setUser(res.data)   
        }).catch((err) => {
            console.log(err);
        });   
    }, [])
    
    function deleteMovie(id) {
       axios.delete(`http://localhost:3000/api/users/${id}`) 
       .then((res) => {
        console.log(res);
       }).catch((err) => {
        console.log(err);
       });
    }
    
    return (
        <div className="overflow-auto z-0 justify-center md:container md:mx-auto rounded-lg box-content w-screen mt-12 h-96 pt-12">
            <table className="table table-auto w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((el, i) => {
                        if (localStorage.getItem("access_token")) {
                            return (
                                <tr key={el.id}>
                                <th>{i + 1}</th>
                                <td>{el.name}</td>
                                <td>{el.email}</td>
                                <td>{el.role}</td>
                                <td>    
                                    <button onClick={() => deleteMovie(el.id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        }else {
                            return (
                                <tr key={el.id}>
                                    <th>{i + 1}</th>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td>{el.role}</td>
                                    <td>
                                    <NavLink
                                        to='/login'
                                    >Login First</NavLink>
                                    </td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        </div>
    )
}
