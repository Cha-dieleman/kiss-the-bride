import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { colorsDataset } from "../../globalStyle/globalStyle";
import { NavItem } from "./NavItem";

interface page {
  href: string;
  title: string;
}

const pages: page[] = [
  {
    href: "/employees/1",
    title: "Our team",
  },
];

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ shadow: "none", backgroundColor: "#fff", height: 80 }}
    >
      <Container maxWidth="xl" sx={{ height: 80, shadow: "none" }}>
        <Toolbar disableGutters style={{ height: 80 }}>
          <Typography
            variant="h2"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              textTransform: "uppercase",
            }}
            color={colorsDataset.blue01}
          >
            Attractive &amp; Bubbly Company
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ color: colorsDataset.blue01}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, key) => (
                <NavItem
                  href={page.href}
                  id={key.toString()}
                  title={page.title}
                  color={colorsDataset.black01}
                />
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h2"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <NavItem
              id={"ABC"}
              href={"/"}
              title={"ABC"}
              color={colorsDataset.blue01}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, key) => (
              <Typography
                variant="h4"
                noWrap
                sx={{ marginLeft: "16px !important" }}
              >
                <NavItem
                  href={page.href}
                  id={key.toString()}
                  title={page.title}
                />
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
