import { useContext } from 'react'
import { EmployeeContext } from '../../utils/EmployeeContext'
import DataTable from '../../components/DataTable'
import columnsTitles from '../../utils/columnsTitles'
import { Link } from 'react-router-dom'

function EmployeesList() {
    const { employees } = useContext(EmployeeContext)

    return (
        <>
            <h1>Current Employees</h1>
            <DataTable datas={employees} columnsTitles={columnsTitles} />
            <Link to="/">Home</Link>
        </>
    )
}

export default EmployeesList
