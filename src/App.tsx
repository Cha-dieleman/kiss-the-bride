import React from 'react';
import { Routes, Route } from "react-router-dom";
import { EmployeesPage } from './sections/EmployeesPage/EmployeesPage';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/employees/:pageParams" element={<EmployeesPage />}/>
      </Routes>
    </div>
  );
}
