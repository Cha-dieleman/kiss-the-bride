import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { useGetEmployees } from "../../queries/useGetEmployees";

export const TotalAvatarsGroup = ({ page, checked }: { page: number, checked: boolean }) => {
  const { data } = useGetEmployees(page, checked);
  const [employees, setEmployees] = useState<any>(undefined);

  useEffect(() => {
    setEmployees(data);
  }, [data, page]);

  return (
    <div style={{display: "flex", justifyContent: "center", marginBottom: 24}}>
      {employees && (
        <AvatarGroup total={60} max={6}>
          {employees.results.map((employee: any, key: number) => {
            return (
              <div key={key}>
                <Avatar
                  alt={`${employee.name.first} ${employee.name.last}'s portrait`}
                  src={employee.picture.medium}
                />
              </div>
            );
          })}
        </AvatarGroup>
      )}
    </div>
  );
};
