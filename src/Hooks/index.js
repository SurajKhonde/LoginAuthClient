import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { NotificationContext } from "../Context/NotificationProvider";
import { ThemeContext } from "../Context/ThemeProvider";
import { OtpContext } from "../Context/OptProvider";

export const useTheme = () => useContext(ThemeContext);
export const useNotification = () => useContext(NotificationContext);
export const useAuth = () => useContext(AuthContext);
export const useOtp = () => useContext(OtpContext);