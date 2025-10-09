"use client";

import { useEffect, useState } from "react";
import ShowProfile from "./ShowProfile";
import EditProfile from "./EditProfile";

import { fetchAuthSession } from "aws-amplify/auth";

interface Address {
  street: string;
  postalCode: string;
  city: string;
}
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  bank?: string;
}

export default function Profile() {
  const [user, setUser] = useState<UserData | null>(null);
  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const session = await fetchAuthSession();

    const tlwUser = await fetch(
      "https://api.thelimitlessway.nl/api/v1/user/user-profile",
      {
        headers: {
          Authorization: `Bearer ${session.tokens?.idToken?.toString()}`,
        },
      }
    );
    const tlwUserJson = await tlwUser.json();
    const { address, contact, firstName, lastName } = tlwUserJson.data;
    setUser({
      firstName: firstName,
      lastName: lastName,
      email: contact.email,
      phone: contact.phone,
      address: {
        street: address.street,
        postalCode: address.postalCode,
        city: address.city,
      },
    });
  };

  const enableEditMode = () => {
    setEditProfile(true);
  };

  const disableEditMode = () => {
    setEditProfile(false);
  };

  return (
    <>
      {!editProfile && user && (
        <ShowProfile user={user} enableEditMode={enableEditMode} />
      )}

      {editProfile && user && (
        <EditProfile
          user={user}
          setUser={setUser}
          disableEditMode={disableEditMode}
        />
      )}
    </>
  );
}
