import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';

interface AppPaginationProps {
    page: number;
    checked: boolean;
}

export const AppPagination = ({
    page,
    checked
} : AppPaginationProps) => {
    const navigate = useNavigate();

    const handleChange = (e: any, page: number ) => {
        navigate(`/employees/${page}`)
        window.scrollTo(0, 0)
    }    

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Pagination
                count={5}
                page={page}
                onChange={(e: React.ChangeEvent<unknown>, page: number) => handleChange(e, page)}
                showFirstButton
                showLastButton
            />
        </div>
    )
}