import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Perfil.css"

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <img className="profile-picture" src={user.picture} alt={user.picture}/>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
      </div>
    )
  );
};
export default Profile;