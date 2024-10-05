import { useContext } from 'react'
import { EmployeeContext } from '../../utils/EmployeeContext'
import EmployeesTable from '../../components/EmployeesTable'
import { Link } from 'react-router-dom'

function EmployeesList() {
    const { employees } = useContext(EmployeeContext)

    return (
        <>
            <h1>Current Employees</h1>
            <EmployeesTable employees={employees} />
            <Link to="/">Home</Link>
        </>
    )
}

export default EmployeesList
