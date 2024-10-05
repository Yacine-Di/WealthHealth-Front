import { createContext, useEffect, useState } from 'react'

const EmployeeContext = createContext()

const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState(() => {
        const savedEmloyees = localStorage.getItem('employees')
        return savedEmloyees ? JSON.parse(savedEmloyees) : []
    })

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees))
    }, [employees])

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
