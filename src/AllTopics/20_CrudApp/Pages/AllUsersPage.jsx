import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/loader/Loader";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllUsersPage = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    setLoading(true);
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
      let resp = await axios.delete(`http://localhost:9000/users/${id}`);
      console.log(resp);
      toast.success("User deleted");
    } catch (error) {
      console.log(error);
      toast.error("Unable to delete");
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="pt-20">
      <h1 className="text-4xl p-8 font-bold text-center items-center">All Users Details</h1>
      {allUsers.length === 0 ? (
        <p>No users available</p>
      ) : (
        allUsers.map((user) => {
          return (
            
            <div key={user.id} className="border-2 rounded-2xl p-3  flex flex-col items-center justify-center min-h-4 w-95 m-4">

              <p className="p-1 ">
                <strong >Username :  </strong>
                {user.username}
              </p>
              <p className="p-1 ">
                <strong >Email :  </strong>
                {user.email}
              </p >
              <div className="p-1 ">
                <Link to={`/edit-user/${user.id}`} className="border ps-2 pe-2 rounded m-2 font-bold">Edit</Link>
                <button onClick={() => deleteUser(user.id)} className="border ps-2 pe-2 rounded m-2 font-bold">Delete</button>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default AllUsersPage;