"use client";

import { useState } from "react";
import ShowProfile from "./ShowProfile";
import EditProfile from "./EditProfile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  setUpTOTP,
  updateMFAPreference,
  verifyTOTPSetup,
} from "aws-amplify/auth";

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

  const [mfaCode, setMfaCode] = useState("");
  const [authKey, setAuthKey] = useState("");

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
    </>
  );
}
