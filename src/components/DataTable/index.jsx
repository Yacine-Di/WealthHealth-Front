import Pagination from '../Pagination'
import { useEffect, useState } from 'react'
import './index.scss'

function DataTable({ datas, columnsTitles }) {
    const [previousColIndex, setPreviousColIndex] = useState(0)
    const [previousColClicked, setPreviousColClicked] = useState(null)
    const [sortedData, setSortedData] = useState([...datas])
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const filtered = datas.filter((data) =>
            Object.values(data).some((value) =>
                value.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )
        setSortedData(filtered)
    }, [searchTerm, datas])

    /** Function that change icon from column header and sort the datas
     *
     * @param {MouseEvent} event
     * @param {int} index
     */
    const handleColumnClick = (event, index) => {
        if (index !== previousColIndex && previousColClicked !== null) {
            previousColClicked.className = 'sorting'
        }

        setPreviousColIndex(index)
        setPreviousColClicked(event.currentTarget)

        const key = Object.keys(datas[0])[index]
        let newSortedData = []

        if (event.currentTarget.classList.contains('sorting')) {
            event.currentTarget.classList.remove('sorting')
            event.currentTarget.classList.add('sorting_asc')
            newSortedData = [...sortedData].sort((a, b) =>
                a[key].localeCompare(b[key])
            )
        } else if (event.currentTarget.classList.contains('sorting_asc')) {
            event.currentTarget.classList.remove('sorting_asc')
            event.currentTarget.classList.add('sorting_desc')
            newSortedData = [...sortedData].sort((b, a) =>
                a[key].localeCompare(b[key])
            )
        } else if (event.currentTarget.classList.contains('sorting_desc')) {
            event.currentTarget.classList.remove('sorting_desc')
            event.currentTarget.classList.add('sorting_asc')
            newSortedData = [...sortedData].sort((a, b) =>
                a[key].localeCompare(b[key])
            )
        }

        setSortedData(newSortedData)
    }

    const lastRowIndex = Math.min(currentPage * rowsPerPage, sortedData.length)
    const firstRowIndex = (currentPage - 1) * rowsPerPage
    const paginatedDatas = sortedData.slice(firstRowIndex, lastRowIndex)

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
                                    handleColumnClick(event, index)
                                }
                            >
                                {title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedDatas.length > 0 ? (
                        paginatedDatas.map((data, index) => (
                            <tr className="row row--color" key={index}>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.startDate}</td>
                                <td>{data.department}</td>
                                <td>{data.dateOfBirth}</td>
                                <td>{data.street}</td>
                                <td>{data.city}</td>
                                <td>{data.state}</td>
                                <td>{data.zipCode}</td>
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
                    {sortedData.length}
                </p>
                <Pagination
                    datas={sortedData}
                    rowsPerPage={rowsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default DataTable
