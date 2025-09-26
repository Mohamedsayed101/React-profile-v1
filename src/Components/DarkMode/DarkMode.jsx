import { IconButton, Tooltip } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkMode() {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Tooltip title={`Switch to ${mode === "light" ? "Dark" : "Light"} mode`}>
      <IconButton
        onClick={toggleMode}
        color="inherit"
        sx={{
          ml: 1,
          color:"purple"
        }}
      >
        {mode === "light" ? <FaSun /> : <FaMoon />}
      </IconButton>
    </Tooltip>
  );
}
