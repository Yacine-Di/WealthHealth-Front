import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import CreateEmployee from './pages/CreateEmployee/index.jsx'
import EmployeesList from './pages/EmployeesList/index.jsx'
import { EmployeeProvider } from './utils/EmployeeContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <EmployeeProvider>
                <Routes>
                    <Route path="/" element={<CreateEmployee />}></Route>
                    <Route path="/emloyees" element={<EmployeesList />}></Route>
                </Routes>
            </EmployeeProvider>
        </BrowserRouter>
    </StrictMode>
)
