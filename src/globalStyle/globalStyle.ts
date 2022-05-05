import { createTheme } from "@mui/material/styles";

export const colorsDataset = {
    backgroundColorMainContent: '#f6f7fd',
    red01: '#db3859',
    blue01: "#459abf",
    yellow01: "#fadd60",
    black01: "#1a1b1f"
};

// example of usage : <Typography variant={'h6'}>condition</Typography>
const typographyTheme = createTheme({
    typography: {
      h1: {
        fontSize: 32,
        fontWeight: 900,
      },
      h2: {
        fontSize: 32,
        fontWeight: 700,
      },
      h3: {
        fontSize: 28,
        fontWeight: 700,
      },
      h4: {
        fontSize: 18,
        fontWeight: 700,
      },
      h5: {
        fontSize: 16,
        fontWeight: 700,
      },
      h6: {
        fontSize: 14,
        fontWeight: 400,
      },
    },
  });

  export const LayoutTheme = createTheme(typographyTheme);