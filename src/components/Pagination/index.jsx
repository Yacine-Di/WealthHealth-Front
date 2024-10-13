import './index.scss'

function Pagination({ datas, rowsPerPage, currentPage, setCurrentPage }) {
    const nbrPages = Math.ceil(datas.length / rowsPerPage)
    const nbrPagesArray = [...Array(nbrPages + 1).keys()].slice(1)

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const changeCurrentPage = (id) => {
        setCurrentPage(id)
    }

    const nextPage = () => {
        if (currentPage < nbrPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <ul className="pagination">
            <li className="page-item">
                <a href="#" className="page-link" onClick={prevPage}>
                    Prev
                </a>
            </li>
            {nbrPagesArray.map((nbr, index) => (
                <li
                    className={`page-item ${
                        currentPage === nbr ? 'active' : ''
                    }`}
                    key={index}
                >
                    <a
                        href="#"
                        className="page-link"
                        onClick={() => changeCurrentPage(nbr)}
                    >
                        {nbr}
                    </a>
                </li>
            ))}
            <li className="page-item">
                <a href="#" className="page-link" onClick={nextPage}>
                    Next
                </a>
            </li>
        </ul>
    )
}

export default Pagination
