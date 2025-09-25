import { useTheme } from "@mui/material/styles";

export default function HeadingPage({ title }) {
  const theme = useTheme();
  return (
    <>
      <h1
        className="text-5xl font-medium relative header-line"
        style={{
          color: `${theme.palette.primary.light}`,
        }}
        data-aos="fade-down"
      >
        {title}
      </h1>
    </>
  );
}
