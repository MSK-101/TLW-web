"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";
import {
  confirmSignIn,
  resetPassword,
  confirmResetPassword,
  signIn,
  SignInInput,
  getCurrentUser,
} from "aws-amplify/auth";
import "../../lib/cognito";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import { useNotification } from "@/contexts/NotificationContext";

export default function SignIn() {
  const router = useRouter();
  const { showError, showSuccess } = useNotification();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [newPassword, setNewPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [mfaCode, setMfaCode] = useState("");

  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showMfaModal, setShowMfaModal] = useState(false);

  useEffect(() => {
    const checkUserLogin = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          showSuccess("Already Logged In", "Redirecting to dashboard...");
          router.push("/dashboard/profile");
        }
      } catch (error) {
        console.info("User not logged in:", error);
      }
    };

    checkUserLogin();
  }, [router]);

  const signInHandler = async () => {
    if (!email || !password) {
      showError(
        "Missing Information",
        "Please enter both your email and password"
      );
      return;
    }

    try {
      setIsLoading(true);

      const signInInput: SignInInput = {
        username: email,
        password: password,
      };

      const { isSignedIn, nextStep } = await signIn(signInInput);

      if (isSignedIn) {
        showSuccess(
          "Welcome Back!",
          "Login successful. Redirecting to dashboard..."
        );
        router.push("/dashboard/profile");
      }

      if (
        nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED"
      ) {
        setShowNewPasswordModal(true);
      }
      if (nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_TOTP_CODE") {
        setShowMfaModal(true);
      }
      if (nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_EMAIL_CODE") {
        setShowMfaModal(true);
      }
      if (nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_SMS_CODE") {
        setShowMfaModal(true);
      }
    } catch (error: any) {
      showError(
        "Login Failed",
        error.message || "Invalid email or password. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const newPasswordHandler = async () => {
    try {
      setIsLoading(true);

      const confirm = await confirmSignIn({
        challengeResponse: newPassword,
      });
      showSuccess(
        "Password Updated",
        "Your password has been successfully updated."
      );
      router.push("dashboard/profile");
    } catch (error: any) {
      showError(
        "Password Update Failed",
        error.message || "Failed to update password. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const resetPasswordHandler = async () => {
    if (!email) {
      showError("Email Required", "Please enter your email address first");
      return;
    }

    try {
      const response = await resetPassword({ username: email });
      const { isPasswordReset, nextStep } = response;
      if (nextStep.resetPasswordStep == "CONFIRM_RESET_PASSWORD_WITH_CODE") {
        showSuccess(
          "Reset Code Sent",
          `Please check your ${nextStep.codeDeliveryDetails.deliveryMedium} for the password reset code.`
        );
        setShowForgotPasswordModal(true);
      }
    } catch (error: any) {
      showError(
        "Reset Failed",
        error.message ||
          "Failed to send reset code. Please check your email and try again."
      );
    }
  };

  const confirmResetPasswordHandler = async () => {
    try {
      const response = await confirmResetPassword({
        username: email,
        confirmationCode: verificationCode,
        newPassword,
      });
      showSuccess(
        "Password Reset Complete",
        "Your password has been successfully reset! Please log in with your new password."
      );
      window.location.reload();
    } catch (error: any) {
      showError(
        "Password Reset Failed",
        error.message || "Your code or Password is invalid! Please try again."
      );
    }
  };

  const mfaHandler = async () => {
    try {
      setIsLoading(true);

      const confirm = await confirmSignIn({
        challengeResponse: mfaCode,
      });
      console.log("confirm", confirm);
      showSuccess(
        "Welcome Back!",
        "Login successful. Redirecting to dashboard..."
      );
      router.push("/dashboard/profile");
    } catch (error: any) {
      showError(
        "Code Verification Failed",
        error.message || "Failed to verify your code. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* {isLoading && <Spinner size="lg" variant="primary" fullPage />} */}

      <div className="flex flex-col items-center gap-10 px-10 py-20 bg-gray-100 min-h-screen">
        <Image
          src={"/logos/logo animation.svg"}
          alt="Logo"
          width={100}
          height={100}
        />

        <h1 className="text-5xl font-funnel-display">Log in</h1>

        <div className="flex flex-col gap-6 min-w-[350px]">
          <Input
            type="email"
            placeholder="E-mailadres"
            className="bg-white"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={isLoading}
          />
          <Input
            type="password"
            placeholder="Wachtwoord"
            className="bg-white"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={isLoading}
          />
          <div className="flex flex-col items-center text-[#6028AD]">
            <Button
              variant="link"
              className="text-[#6028AD] text-md font-normal"
              onClick={resetPasswordHandler}
            >
              Wachtwoord vergeten
            </Button>
            {/* <a href="#" className="text-[#6028AD] text-md font-normal">
              E-mailadres vergeten
            </a> */}
          </div>
          <Button
            onClick={signInHandler}
            disabled={isLoading}
            className="relative overflow-hidden bg-black text-white border-black hover:bg-black transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/30 active:translate-y-0 active:shadow-lg disabled:hover:translate-y-0 disabled:hover:shadow-none group"
          >
            <span className="relative z-10 flex items-center justify-center">
              {isLoading ? (
                <>
                  <Spinner size="sm" className="mr-3" />
                  Logging in...
                </>
              ) : (
                "Log in"
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          </Button>
          <div className="text-center">
            <p>Nog geen account? Download de app</p>

            <div className="flex justify-center gap-2 mt-5">
              <div className="p-2 rounded-md bg-gray-950">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.8971 1.92216C12.2114 0.207676 14.0383 0.199219 14.0383 0.199219C14.0383 0.199219 14.3101 1.81124 13.0046 3.3644C11.6104 5.02261 10.026 4.75134 10.026 4.75134C10.026 4.75134 9.72865 3.44701 10.8971 1.92216Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1931 5.68939C10.8694 5.68939 12.1239 4.76953 13.7573 4.76953C16.5686 4.76953 17.6746 6.74976 17.6746 6.74976C17.6746 6.74976 15.5116 7.84461 15.5116 10.5011C15.5116 13.4978 18.2063 14.5305 18.2063 14.5305C18.2063 14.5305 16.3225 19.779 13.7783 19.779C12.6095 19.779 11.7013 18.9993 10.4698 18.9993C9.23828 18.9993 7.96996 19.8079 7.15902 19.8079C4.83561 19.8083 1.90039 14.8297 1.90039 10.8276C1.90039 6.82555 4.3848 4.8245 6.7151 4.8245C8.22987 4.8245 9.40553 5.68939 10.1931 5.68939Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="p-2 rounded-md bg-gray-950">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.5908 9.21845L15.311 7.35547L12.6133 9.92157L15.0783 12.2668L18.5903 10.272C18.7833 10.1621 18.8991 9.96515 18.8991 9.7455C18.8991 9.52584 18.7838 9.32827 18.5908 9.21845Z"
                    fill="white"
                  />
                  <path
                    d="M14.7557 7.03986L11.1464 4.98919L3.23633 1L12.1702 9.49962L14.7557 7.03986Z"
                    fill="white"
                  />
                  <path
                    d="M3.36523 18.7179L11.1572 14.4933L14.5209 12.5827L12.1674 10.3438L3.36523 18.7179Z"
                    fill="white"
                  />
                  <path
                    d="M2.70748 1.34375L2.69922 18.5086L11.7246 9.92181L2.70748 1.34375Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Set new Password"
        description=""
        open={showNewPasswordModal}
        setOpen={setShowNewPasswordModal}
      >
        <div className="flex flex-col gap-3">
          <div className="font-bold">New Password</div>
          <Input
            type="password"
            placeholder="New Password"
            className="bg-white"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            disabled={isLoading}
          />
          <Button onClick={newPasswordHandler}>Save</Button>
        </div>
      </Modal>

      <Modal
        title="Forgot Password?"
        description="Enter the code"
        open={showForgotPasswordModal}
        setOpen={setShowForgotPasswordModal}
      >
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Code"
            value={verificationCode}
            onChange={(event) => setVerificationCode(event.target.value)}
          />
          <Input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            disabled={isLoading}
          />
          <Button onClick={confirmResetPasswordHandler}>Reset Password</Button>
        </div>
      </Modal>

      <Modal
        title="2FA Verification"
        description="Enter the code"
        open={showMfaModal}
        setOpen={setShowMfaModal}
      >
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Code"
            value={mfaCode}
            onChange={(event) => setMfaCode(event.target.value)}
          />
          <Button onClick={mfaHandler}>Confirm</Button>
        </div>
      </Modal>
    </div>
  );
}
