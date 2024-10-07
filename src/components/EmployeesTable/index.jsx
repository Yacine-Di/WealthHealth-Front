import Pagination from '../Pagination'
import './index.scss'
import { useEffect, useState } from 'react'

function EmployeesTable({ employees, columnsTitles }) {
    const [previousColIndex, setPreviousColIndex] = useState(0)
    const [previousColClicked, setPreviousColClicked] = useState(null)
    const [sortedEmployees, setSortedEmployees] = useState([...employees])
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const filtered = employees.filter((employee) =>
            Object.values(employee).some((value) =>
                value.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
        console.log(filtered)
        setSortedEmployees(filtered)
    }, [searchTerm, employees])

    const handleBackGroundClick = (event, index) => {
        if (index !== previousColIndex && previousColClicked !== null) {
            previousColClicked.className = 'sorting'
        }

        setPreviousColIndex(index)
        setPreviousColClicked(event.currentTarget)

        const key = Object.keys(employees[0])[index]
        let sortedData = []

        if (event.currentTarget.classList.contains('sorting')) {
            event.currentTarget.classList.remove('sorting')
            event.currentTarget.classList.add('sorting_asc')
            sortedData = [...employees].sort((a, b) =>
                a[key].localeCompare(b[key])
            )
        } else if (event.currentTarget.classList.contains('sorting_asc')) {
            event.currentTarget.classList.remove('sorting_asc')
            event.currentTarget.classList.add('sorting_desc')
            sortedData = [...employees].sort((b, a) =>
                a[key].localeCompare(b[key])
            )
        } else if (event.currentTarget.classList.contains('sorting_desc')) {
            event.currentTarget.classList.remove('sorting_desc')
            event.currentTarget.classList.add('sorting_asc')
            sortedData = [...employees].sort((a, b) =>
                a[key].localeCompare(b[key])
            )
        }

        setSortedEmployees(sortedData)
    }

    const lastRowIndex = currentPage * rowsPerPage
    const firstRowIndex = lastRowIndex - rowsPerPage
    const paginatedEmloyees = sortedEmployees.slice(firstRowIndex, lastRowIndex)

    return (
        <div className="dataTable">
            <div className="table-controls">
                <div className="table-controls__row-count">
                    Show
                    <select
                        onChange={(event) =>
                            setRowsPerPage(Number(event.target.value))
                        }
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    entries
                </div>
                <div className="table-controls__search">
                    <label htmlFor="search">Search: </label>
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    ></input>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        {columnsTitles.map((title, index) => (
                            <th
                                key={index}
                                className="sorting"
                                onClick={(event) =>
                                    handleBackGroundClick(event, index)
                                }
                            >
                                {title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedEmloyees.length > 0 ? (
                        paginatedEmloyees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.startDate}</td>
                                <td>{employee.department}</td>
                                <td>{employee.dateOfBirth}</td>
                                <td>{employee.street}</td>
                                <td>{employee.city}</td>
                                <td>{employee.state}</td>
                                <td>{employee.zipCode}</td>
                            </tr>
                        ))
                    ) : (
                        <tr className="odd">
                            <td
                                colSpan={columnsTitles.length}
                                className="dataTable_empty"
                            >
                                No matching records found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="table-controls">
                <p className="table-infos">
                    Showing {firstRowIndex + 1} to {lastRowIndex} of{' '}
                    {sortedEmployees.length}
                </p>
                <Pagination
                    datas={sortedEmployees}
                    rowsPerPage={rowsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default EmployeesTable
