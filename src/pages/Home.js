import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
const Home = () => {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetchTeachers();
    }, [])

    const fetchTeachers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setTeachers(result.data.reverse());
        console.log(result)
    }

    const deleteTeacher = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        fetchTeachers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>

                <table class="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teachers.map((teacher) => (
                                <tr>
                                    <th scope="row">{teacher.id}</th>
                                    <td>{teacher.name}</td>
                                    <td>{teacher.username}</td>
                                    <td>{teacher.email}</td>
                                    <td>
                                        <Link className="btn btn-primary" to={`/teachers/view/${teacher.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary" to={`/teachers/edit/${teacher.id}`}>Edit</Link>
                                        <button className="btn btn-danger" onClick={() => deleteTeacher(teacher.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Home;