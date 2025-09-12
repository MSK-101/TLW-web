"use client";

import React from "react";
import { Notification, NotificationType } from "@/contexts/NotificationContext";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";

interface NotificationToastProps {
  notification: Notification;
  onRemove: (id: string) => void;
}

const getNotificationStyles = (type: NotificationType) => {
  switch (type) {
    case "success":
      return {
        container: "bg-green-50 border-green-200 text-green-800",
        icon: "text-green-500",
        iconComponent: CheckCircle,
      };
    case "error":
      return {
        container: "bg-red-50 border-red-200 text-red-800",
        icon: "text-red-500",
        iconComponent: AlertCircle,
      };
    case "warning":
      return {
        container: "bg-yellow-50 border-yellow-200 text-yellow-800",
        icon: "text-yellow-500",
        iconComponent: AlertTriangle,
      };
    case "info":
      return {
        container: "bg-blue-50 border-blue-200 text-blue-800",
        icon: "text-blue-500",
        iconComponent: Info,
      };
    default:
      return {
        container: "bg-gray-50 border-gray-200 text-gray-800",
        icon: "text-gray-500",
        iconComponent: Info,
      };
  }
};

export default function NotificationToast({
  notification,
  onRemove,
}: NotificationToastProps) {
  const { type, title, message, id } = notification;
  const styles = getNotificationStyles(type);
  const IconComponent = styles.iconComponent;

  return (
    <div
      className={`
        ${styles.container}
        border rounded-lg p-4 shadow-lg max-w-md w-full
        transform transition-all duration-300 ease-in-out
        animate-in slide-in-from-top-2 fade-in-0
      `}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <IconComponent
            className={`h-5 w-5 ${styles.icon}`}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium">{title}</h3>
          {message && <div className="mt-1 text-sm opacity-90">{message}</div>}
        </div>
        <div className="ml-4 flex-shrink-0">
          <button
            type="button"
            className={`
              inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2
              ${styles.icon} hover:opacity-75 transition-opacity
            `}
            onClick={() => onRemove(id)}
            aria-label="Close notification"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
