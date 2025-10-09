"use client";

import { useEffect, useState } from "react";
import ShowProfile from "./ShowProfile";
import EditProfile from "./EditProfile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  setUpTOTP,
  updateMFAPreference,
  verifyTOTPSetup,
  fetchAuthSession,
} from "aws-amplify/auth";

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

  const [mfaCode, setMfaCode] = useState("");
  const [authKey, setAuthKey] = useState("");

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

  const authSMSHandler = async () => {
    const mfa = await updateMFAPreference({ sms: "PREFERRED" });
    console.log("mfa", mfa);
  };

  const authEmailHandler = async () => {
    const mfa = await updateMFAPreference({ email: "PREFERRED" });
    console.log("mfa", mfa);
  };

  const authAppHandler = async () => {
    const totpSetupDetails = await setUpTOTP();
    console.log("totpSetupDetails", totpSetupDetails);
    setAuthKey(totpSetupDetails.sharedSecret);
    const appName = "tlw";
    const setupUri = totpSetupDetails.getSetupUri(appName);
    console.log("setupUri", setupUri);
  };

  const verfyTotpHandler = async () => {
    const verify = await verifyTOTPSetup({ code: mfaCode });
    console.log("verify", verify);

    const mfa = await updateMFAPreference({ totp: "PREFERRED" });
    console.log("mfa", mfa);
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

      {/* <Button onClick={authSMSHandler}>Enable login with SMS</Button>
      <Button onClick={authEmailHandler}>Enable login with Email</Button>
      <Button onClick={authAppHandler}>
        Enable login with Authenticator App
      </Button>

      {authKey && <div>{authKey}</div>}

      <Input
        id="mfaCode"
        type="text"
        placeholder="Code"
        value={mfaCode}
        onChange={(event) => setMfaCode(event.target.value)}
      />

      <Button onClick={verfyTotpHandler}> Verify TOTP </Button> */}

      {/* <Button onClick={makeRequest}> Make Request </Button> */}
    </>
  );
}
