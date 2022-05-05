import React, { useEffect, useState } from "react";
import { useGetEmployees } from "../../queries/useGetEmployees";
import { Employee } from "./Employee";

const listContainerStyle = {
  marginBottom: 48,
} as const;

const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContext: "center",
} as const;

const employeeStyle = {
  marginRight: 24,
  marginBottom: 24,
} as const;

export const EmployeesList = ({ page }: { page: number }) => {
  const { data } = useGetEmployees(page);
  const [employees, setEmployees] = useState<any>(undefined);

  useEffect(() => {
    setEmployees(data);
  }, [data, page]);

  return (
    <div style={listContainerStyle}>
      {employees && (
        <div style={listStyle}>
          {employees.results.map((employee: any, key: number) => {
            return (
              <div key={key} style={employeeStyle}>
                <Employee employee={employee} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
