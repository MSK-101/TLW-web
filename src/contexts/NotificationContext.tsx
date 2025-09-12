"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";

export type NotificationType = "success" | "error" | "warning" | "info";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number; // in milliseconds, 0 means no auto-dismiss
}

interface NotificationState {
  notifications: Notification[];
}

type NotificationAction =
  | { type: "ADD_NOTIFICATION"; payload: Notification }
  | { type: "REMOVE_NOTIFICATION"; payload: string }
  | { type: "CLEAR_ALL_NOTIFICATIONS" };

const initialState: NotificationState = {
  notifications: [],
};

function notificationReducer(
  state: NotificationState,
  action: NotificationAction
): NotificationState {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case "REMOVE_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
      };
    case "CLEAR_ALL_NOTIFICATIONS":
      return {
        ...state,
        notifications: [],
      };
    default:
      return state;
  }
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
  clearAllNotifications: () => void;
  showSuccess: (title: string, message: string, duration?: number) => void;
  showError: (title: string, message: string, duration?: number) => void;
  showWarning: (title: string, message: string, duration?: number) => void;
  showInfo: (title: string, message: string, duration?: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  const addNotification = (notification: Omit<Notification, "id">) => {
    const id = crypto.randomUUID();
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: { ...notification, id },
    });

    // Auto-remove notification after duration (default 7 seconds)
    const duration = notification.duration ?? 7000;
    if (duration > 0) {
      setTimeout(() => {
        dispatch({ type: "REMOVE_NOTIFICATION", payload: id });
      }, duration);
    }
  };

  const removeNotification = (id: string) => {
    dispatch({ type: "REMOVE_NOTIFICATION", payload: id });
  };

  const clearAllNotifications = () => {
    dispatch({ type: "CLEAR_ALL_NOTIFICATIONS" });
  };

  const showSuccess = (title: string, message: string, duration?: number) => {
    addNotification({ type: "success", title, message, duration });
  };

  const showError = (title: string, message: string, duration?: number) => {
    addNotification({ type: "error", title, message, duration });
  };

  const showWarning = (title: string, message: string, duration?: number) => {
    addNotification({ type: "warning", title, message, duration });
  };

  const showInfo = (title: string, message: string, duration?: number) => {
    addNotification({ type: "info", title, message, duration });
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications: state.notifications,
        addNotification,
        removeNotification,
        clearAllNotifications,
        showSuccess,
        showError,
        showWarning,
        showInfo,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
}
