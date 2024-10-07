import './index.scss'
import { useState } from 'react'

function EmployeesTable({ employees }) {
    const [previousIndex, setPreviousIndex] = useState(0)
    const [previousTarget, setPreviousTarget] = useState(null)
    const [sortedEmployees, setSortedEmployees] = useState([...employees])
    const columnsTitles = [
        'First Name',
        'Last Name',
        'Start Date',
        'Departement',
        'Date Of Birth',
        'Street',
        'City',
        'State',
        'Zip Code',
    ]

    const handleBackGroundClick = (event, index) => {
        if (index !== previousIndex && previousTarget !== null) {
            previousTarget.className = 'sorting'
        }

        setPreviousIndex(index)
        setPreviousTarget(event.currentTarget)

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

    return (
        <div className="dataTable">
            <div className="table-controls">
                <div className="table-controls__row-count">
                    Show
                    <select>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    entries
                </div>
                <div className="table-controls__search">
                    <label htmlFor="search">Search: </label>
                    <input type="text" id="search"></input>
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
                    {sortedEmployees.map((employee, index) => (
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
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeesTable
