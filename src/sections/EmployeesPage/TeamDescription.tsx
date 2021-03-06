import React from "react";
import { colorsDataset } from "../../globalStyle/globalStyle";
import Typography from "@mui/material/Typography";
import { TotalAvatarsGroup } from "./TotalAvatarsGroup";

const containerStyle = {
  height: "auto",
  backgroundColor: colorsDataset.blue01,
  color: "#fff",
  padding: 48,
} as const;

const descriptionStyle = {
    textAlign: "center",
    fontWeight: 700,
    marginBottom: 2
  } as const;

export const TeamDescription = ({ page, checked }: { page: number, checked: boolean }) => {
  return (
    <div style={containerStyle}>
      <TotalAvatarsGroup page={page} checked={checked}/>
      <Typography variant="h3" noWrap sx={descriptionStyle}>
        Our values
      </Typography>
      <div style={{textAlign: "center"}}>
        At first, Stallman viewed these notices with alarm. Rare was the
        software program that didn't borrow source code from past programs, and
        yet, with a single stroke of the president's pen, Congress had given
        programmers and companies the power to assert individual authorship over
        communally built programs. It also injected a dose of formality into
        what had otherwise been an informal system.
      </div>
    </div>
  );
};
