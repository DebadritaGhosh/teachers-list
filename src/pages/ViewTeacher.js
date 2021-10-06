import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewTeacher = () => {
    const [teacher, setTeacher] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""
    });
    const { id } = useParams();

    const fetchTeacher = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setTeacher(res.data);
    };

    useEffect(() => {
        fetchTeacher();
    }, [])

    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                back to Home
            </Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name: {teacher.name}</li>
                <li className="list-group-item">user name: {teacher.username}</li>
                <li className="list-group-item">email: {teacher.email}</li>
                <li className="list-group-item">phone: {teacher.phone}</li>
                <li className="list-group-item">website: {teacher.website}</li>
            </ul>
        </div>
    )
}

export default ViewTeacher
