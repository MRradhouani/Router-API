import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    Col,
    Card,
    Button,
    ListGroup,
    CardHeader,
    CardText,
} from "reactstrap";
const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = () => {
            axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    setUsers(response.data);
                })
                .catch((err) => console.log(err));

        };
        fetchUsers();
    }, []);
    return (
        <div className="all">
            {users.map((user) => (
                < li className="card" key={user.id} >
                    {user.name}
                    {user.username}<br />
                    {user.email}<br />
                    <Link to={`/profile/${user.id}`}>Visit profile</Link>


                            {/* <a href='/'>hello there</a> */}
                                    {/* <Link className="text-light" to={`/profile/${user.id}`}>
                                        Go To profile
                                 </Link> */}
                    {/* <li><Link to="/profile">Shoes</Link></li> */}


{/* <Link to={this.props.myroute} onClick={this.hello}>Here</Link> */}


                    {/* <link to={`/profile/${user.id}`}>
                        Go To Profile
                     </link> */}

                </li>

            ))}

        </div>
    )
}

export default UserList
