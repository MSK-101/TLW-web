"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ModalWrapper } from "@/components/ui/modal-wrapper";
import { UserCheckIconLight, UserCheckIconDark } from "@/components/icons";
import { Spinner } from "@/components/ui/spinner";

interface TestpanelModalProps {
  buttonVariant?: "light" | "dark" | "custom";
  buttonClassName?: string;
}

export default function TestpanelModal({
  buttonVariant = "light",
  buttonClassName = "md:px-[32px] md:h-12 md:rounded-xl cursor-pointer",
}: TestpanelModalProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
      setIsLoading(true);
      if (iframeRef.current) {
        iframeRef.current.src =
          "https://thelimitlesswaybv.activehosted.com/f/3";
      }
    }
  };

  let ButtonIcon =
    buttonVariant === "dark" ? UserCheckIconDark : UserCheckIconLight;
  let defaultButtonClass =
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
        Ik wil in het Testpanel <ButtonIcon />
      </Button>

      <ModalWrapper
        open={open}
        setOpen={handleOpenChange}
        title="Ik wil in het Testpanel"
      >
        <h1 className="text-2xl font-bold mb-4 text-[#333]">
          Meld je aan voor het testpanel van de TLW crypto app
        </h1>
        <p>
          Ben je bereid om onze app 3 weken te testen? Meld je dan hieronder
          aan.
        </p>
        <div className="w-full h-[280px] p-0 m-0 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50">
              <Spinner size="lg" variant="primary" />
            </div>
          )}
          <iframe
            ref={iframeRef}
            src="https://thelimitlesswaybv.activehosted.com/f/3"
            className="w-full h-full p-0 m-0"
            title="Ik wil in het Testpanel"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      </ModalWrapper>
    </>
  );
}
