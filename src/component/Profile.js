import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Profile(props) {
    const [user, setUser] = useState({});
    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        //fetch the user by id and set the state
        const fetchUser = () => {
            axios
                .get(
                    "https://jsonplaceholder.typicode.com/users/?id=" +
                    props.match.params.userId
                )
                .then((response) => {
                    console.log(response);
                    setUser(response.data[0]);
                    //   setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        // setIsLoading(true);
        fetchUser();
    }, []);


    return (
        <div>
            {/* <h1>  Welcom : </h1> */}
            {/* {user.props.match.params.id} */}


            < span style={{
                width: "100px",
                height: "100px",
                fontSize: "1.5em",
            }}>
                {user && user.name && user.name[0]}
            </span  >


            <h2 className="display-3">{user && user.name}</h2>
            <p className="lead text-center">
                {/* check if the user and the user.address  is truthy   */}
                {/* access to the nested object element  with es11 style user?.address?.street   => value of street */}

                {`${user && user.address && user.address.street} ${
                    user && user.address && user.address.suite
                    }  ${user && user.adress && user.address.city}`}
            </p>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default Profile
