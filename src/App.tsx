import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { EmployeesPage } from './sections/EmployeesPage/EmployeesPage';
import { LayoutTheme } from './globalStyle/globalStyle';
import { ResponsiveAppBar } from './sections/Header/ResponsiveAppBar';

export const App = () => {
  // TODO
  // tests jests
  // Pb de close sur le burger Menu
  // Clean code
  // Linter
  // 404/405 status error
  // Route Home sur le nom de l'entreprise

  return (
    <div className="App">
      <ThemeProvider theme={LayoutTheme}>
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/employees/:pageParams" element={<EmployeesPage />}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}
