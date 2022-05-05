import React from 'react';
import {LinearProgress} from "@mui/material";
import { useGetEmployees } from '../queries/useGetEmployees';

export const EmployeesLoader = ({...props}) => {
    const {isLoading, error} = useGetEmployees(props.page, props.checked);
    if (isLoading) {
        return <LinearProgress />
    }
    if (error) return null;
    
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
};