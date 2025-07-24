"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ModalWrapper } from "@/components/ui/modal-wrapper";
import { WishlistIconLight, WishlistIconDark } from "@/components/icons";
import { Spinner } from "@/components/ui/spinner";

interface WaitlistModalProps {
  buttonVariant?: "light" | "dark" | "custom";
  buttonClassName?: string;
}

export default function WaitlistModal({
  buttonVariant = "light",
  buttonClassName = "md:px-[32px] md:h-12 md:rounded-xl cursor-pointer",
}: WaitlistModalProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
      setIsLoading(true);
      if (iframeRef.current) {
        iframeRef.current.src =
          "https://thelimitlesswaybv.activehosted.com/f/1";
      }
    }
  };

  const ButtonIcon =
    buttonVariant === "dark" ? WishlistIconDark : WishlistIconLight;
  const defaultButtonClass =
    buttonVariant === "dark"
      ? "md:h-12 md:rounded-xl bg-gray-50 text-gray-900 cursor-pointer hover:opacity-90"
      : buttonVariant === "custom"
      ? buttonClassName
      : "md:px-[32px] md:h-12 md:rounded-xl cursor-pointer";

  return (
    <>
      <Button
        className={
          buttonVariant === "custom" ? buttonClassName : defaultButtonClass
        }
        onClick={() => handleOpenChange(true)}
      >
        Ik wil op de wachtlijst <ButtonIcon />
      </Button>

      <ModalWrapper
        open={open}
        setOpen={handleOpenChange}
        title="Ik wil op de wachtlijst"
      >
        <h1 className="text-2xl font-bold mb-4 text-[#333]">
          Schrijf je in voor de wachtlijst
        </h1>
        <p>
          Wil je als een van de eersten de app proberen? Schrijf je in voor de
          wachtlijst en krijg direct bericht wanneer de app beschikbaar is.
        </p>
        <div className="w-full h-[280px] p-0 m-0 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50">
              <Spinner size="lg" variant="primary" />
            </div>
          )}
          <iframe
            ref={iframeRef}
            src="https://thelimitlesswaybv.activehosted.com/f/1"
            className="w-full h-full p-0 m-0"
            title="Ik wil op de wachtlijst"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      </ModalWrapper>
    </>
  );
}
