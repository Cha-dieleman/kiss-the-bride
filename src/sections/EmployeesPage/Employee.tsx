import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { colorsDataset } from "../../globalStyle/globalStyle";

interface EmployeeProps {
  employee?: any;
}

export const Employee = ({ employee }: EmployeeProps) => {
  return (
    <Card
      sx={{
        height: 300,
        width: 225,
        backgroundColor: colorsDataset.blue01,
      }}
    >
    <Card
      sx={{
        height: 300,
        width: 225,
        borderBottomRightRadius: "0%",
        borderBottomLeftRadius: "20%",
        borderTopLeftRadius: "0%",
        borderTopRightRadius: "20%",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={employee.picture.large}
        alt={`${employee.name.first} ${employee.name.last}'s portrait`}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {`${employee.name.first} ${employee.name.last}`}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {employee.location.city}
        </Typography>
        <Typography variant="body2">{employee.cell}</Typography>
        <Typography variant="body2">{employee.email}</Typography>
      </CardContent>
    </Card>
    </Card>
  );
};
