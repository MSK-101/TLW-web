"use client";

import { useState } from "react";
import ShowProfile from "./ShowProfile";
import EditProfile from "./EditProfile";

export default function Profile() {
  const data = {
    firstname: "Henk",
    lastname: "Peters",
    email: "voornaam@mail.com",
    phone: "+31 6 00 00 00 00",
    address: {
      line_1: "Straatnaam 00",
      line_2: "0000 AA Plaatnaam",
    },
    bank: "NL00 BANK 0000 0000 00",
  };

  const [user, setUser] = useState(data);
  const [editProfile, setEditProfile] = useState(false);

  const enableEditMode = () => {
    setEditProfile(true);
  };

  const disableEditMode = () => {
    setEditProfile(false);
  };

  return (
    <>
      {!editProfile && (
        <ShowProfile user={user} enableEditMode={enableEditMode} />
      )}

      {editProfile && (
        <EditProfile
          user={user}
          setUser={setUser}
          disableEditMode={disableEditMode}
        />
      )}
    </>
  );
}
