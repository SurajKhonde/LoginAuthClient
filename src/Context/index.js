import React from "react";
import AuthProvider from "./AuthProvider";
import NotificationProvider from "./NotificationProvider";
import ThemeProvider from "./ThemeProvider";
import OtpProvider from "./OptProvider";

export default function ContextProviders({ children }) {
  return (
    <NotificationProvider>
      <OtpProvider>
          <AuthProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProvider>
        </OtpProvider>
    </NotificationProvider>
  );
}
