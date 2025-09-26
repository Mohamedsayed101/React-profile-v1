import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#1e88e5",   // أزرق حديث
          light: "#6ab7ff",
          dark: "#005cb2",
        },
        secondary: {
          main: "#f50057",   // وردي جذاب
          light: "#ff4081",
          dark: "#c51162",
        },
        background: {
          default: "#f5f5f5", // رمادي فاتح للخلفية
          paper: "#ffffff",   // ورقة بيضاء
        },
        text: {
          primary: "#212121",
          secondary: "#424242",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#90caf9",   // أزرق فاتح للـ dark mode
          light: "#e3f2fd",
          dark: "#42a5f5",
        },
        secondary: {
          main: "#f48fb1",   // وردي فاتح للـ dark
          light: "#f8bbd0",
          dark: "#c2185b",
        },
        background: {
          default: "#121212", // أسود تقريبا
          paper: "#1e1e1e",   // خلفية الورق للـ dark
        },
        text: {
          primary: "#ffffff",
          secondary: "#e0e0e0",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider theme={theme} defaultMode="system">
        <App />
      </CssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
