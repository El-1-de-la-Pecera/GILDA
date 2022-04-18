import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

export default function UserDetails() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);
  return (
    user && (
      <div className="bg-gray-100 dark:bg-slate-900 dark:text-white">
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>Nombre: {user.given_name}</h2>
          <h2>Apellido:{user.family_name}</h2>

          <p>correo: {user.email}</p>
        </div>
      </div>
    )
  );
}