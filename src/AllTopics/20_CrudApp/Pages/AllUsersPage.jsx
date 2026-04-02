import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/loader/Loader";

const AllUsersPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    try {
      let resp = await axios.get("http://localhost:9000/users");
      console.log(resp);
      setTimeout(() => {
        setAllUsers(resp.data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setAllUsers([]);
    } finally {
      // setLoading(false);
    }
  }

  async function deleteUser(id) {
    try {
      let resp = axios.delete(`http://localhost:9000/users/${id}`);
      console.log(resp);
    } catch (error) {
      console.log(error);
    };
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  return(
  <section className="pt-20">
    {allUsers.length === 0 ? (
      <p>No Users Available</p>
    ) : (
      allUsers.map((user) => {
        return (
          <div key={user.id} className="border-2 ">
            <p>
              <strong>Username :</strong>
              {user.Username}
            </p>
            <p>
              <strong>Email :</strong>
              {user.email}
            </p>
            <div> 
              <button className="border p-1 px-1">Edit</button>
              <button onClick={() => deleteUser(user.id)} className="border ps-1 px-1">Delete</button>
            </div>
          </div>
        );
      })
    )}
  </section>
  )
};

export default AllUsersPage;
