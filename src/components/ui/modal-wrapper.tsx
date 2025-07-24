"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalWrapperProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  children?: React.ReactNode;
  bgColor?: string;
}

export function ModalWrapper({
  open,
  setOpen,
  title,
  children,
  bgColor = "bg-white",
}: ModalWrapperProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity" />
        <DialogPrimitive.Content
          className={`fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl ${bgColor} p-6 shadow-lg focus:outline-none`}
        >
          <DialogPrimitive.Title className="text-2xl font-bold mb-4">
            {title}
          </DialogPrimitive.Title>
          <DialogPrimitive.Close asChild>
            {title && (
              <button
                type="button"
                aria-label="Close"
                className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-50 cursor-pointer"
              >
                <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
              </button>
            )}
          </DialogPrimitive.Close>

          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
