import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EmployeesLoader } from "../../loaders/EmployeesLoader";
import { AppPagination } from "./AppPagination";
import { EmployeesList } from "./EmployeesList";
import { TeamDescription } from "./TeamDescription";

const employeesStyle = {
  padding: 56,
} as const;

export const EmployeesPage = () => {
  let { pageParams } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(
    Number(pageParams) < 1 || Number(pageParams) > 5 ? 1 : Number(pageParams)
  );

  useEffect(() => {
    document.title = "Our Bubbly team";
    /* Redirect the user to the first page if the pageParams doesn't corresponding to an existing page */
    if (Number(pageParams) < 1 || Number(pageParams) > 5) {
      navigate(`/employees/1`);
    }
  });

  /* Prevent the undo/redo action on browser history */
  useEffect(() => {
    setPage(Number(pageParams));
  }, [pageParams]);

  return (
    <>
      <TeamDescription page={page}/>
      <EmployeesLoader>
        <div style={employeesStyle}>
          <EmployeesList page={page} />
          <AppPagination page={page} />
        </div>
      </EmployeesLoader>
    </>
  );
};
