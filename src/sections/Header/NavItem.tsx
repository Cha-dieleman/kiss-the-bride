import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { colorsDataset } from "../../globalStyle/globalStyle";

const StyledLink = styled(
  Link,
  {}
)({
  textDecoration: "none",
  "&:hover": {
    color: `${colorsDataset.yellow01} !important`,
  },
});

interface NavItemProps {
  href: string;
  title: string;
  color?: string;
}

export const NavItem = ({
  color = colorsDataset.black01,
  href,
  title,
}: NavItemProps) => {
  return (
    <StyledLink
      to={href}
      sx={{ color: color, fontWeight: 700, margin: "8px !important" }}
    >
      {title}
    </StyledLink>
  );
};
