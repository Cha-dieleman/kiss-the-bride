import * as React from "react";
import Switch from "@mui/material/Switch";

interface NationalitySwitchProps {
    checked: boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NationalitySwitch = ({
    checked,
    setChecked
}: NationalitySwitchProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 24}}>
      <div>Filter by French nationality</div>
      <div>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        color="secondary"
      />
      </div>
    </div>
  );
};
