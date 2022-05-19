import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export function UserForm() {
  const [user, setUsers] = useState({
    username: '', 
    password: '', 
    isAdmin : false
  });
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async (id) => {
      try {
        const { data } = await axios.get("/api/Users/" + id);
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (router.query?.id) {
      fetchUsers(router.query.id);
    }
    console.log("called");
  }, [router.query.id]);

  const handleChange = ({ target: { name, value } }) =>
    setUsers({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (router.query?.id) {
        await axios.put("/api/users/" + router.query.id, {
          username: user.username,
          password: user.password,
          isAdmin: user.isAdmin
        });
        toast.success("Usuario actualizado", {
          position: "bottom-center",
        });
      } else {
        await axios.post("/api/users", user);
        toast.success("Usuario guardado", {
          position: "bottom-center",
        });
      }

      router.push("/users");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            onChange={handleChange}
            value={user.username}
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
            htmlFor="password"
          >
            password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
            htmlFor="isAdmin"
          >
            isAdmin
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-slate-900 dark:text-white"
            type="checkbox"
            checked="true"
            placeholder="isAdmin"
            id="isAdmin"
            name="isAdmin"
            onChange={handleChange}
            value={user.isAdmin}
            autoComplete="off"
          />
        </div>
        
      
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {router.query?.id ? "Actualizar user" : "Guardar user"}
        </button>
      </form>
    </div>
  );
}
