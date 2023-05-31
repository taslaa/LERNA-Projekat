import React from 'react';

const PagingComponent = ({ itemsPerPage, totalRecords, currentPage, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRecords / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    const prevPage = () => {
        if (currentPage !== 1) {
            onPageChange(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(totalRecords / itemsPerPage)) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageNumber = (pageNumber) => {

        onPageChange(pageNumber)
    }

    return (
        <>
            <div className="card-footer pt-0">
                <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                    <p className="mb-sm-0 text-center text-sm-start"></p>
                    <nav className="mb-sm-0 d-flex justify-content-center" aria-label="navigation">
                        <ul className="pagination pagination-sm pagination-primary-soft mb-0">
                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button className="cursor-pointer page-link" tabIndex="-1" onClick={() => prevPage()}>Prev</button>
                            </li>
                            {pageNumbers.map(pageNumber => (
                                <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? "active" : ""}`}>
                                    <button className="cursor-pointer page-link" onClick={() => handlePageNumber(pageNumber)}>{pageNumber}</button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === Math.ceil(totalRecords / itemsPerPage) ? "disabled" : ""}`}>
                                <button className="cursor-pointer page-link" onClick={() => nextPage()}>Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default PagingComponent;