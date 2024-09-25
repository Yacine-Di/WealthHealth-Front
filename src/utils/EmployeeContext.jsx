import { createContext, useState } from 'react'

const EmployeeContext = createContext()

const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([])

    const addEmployee = (employee) => {
        setEmployees([...employees, employee])
    }

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee }}>
            {children}
        </EmployeeContext.Provider>
    )
}

export { EmployeeContext, EmployeeProvider }
