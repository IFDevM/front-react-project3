import React, {useState} from 'react';
import './pivot.css';

function Pivot({ data, onRowClick, selectedYear }) {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    // Pagination
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const currentData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pivot-container">
        <h2>Tableau Pivot: Occurrences des prénoms par année</h2>
        <table className="pivot-table">
            <thead>
            <tr>
                <th>Année</th>
                <th>Homme</th>
                <th>Femme</th>
            </tr>
            </thead>
            <tbody>
            {currentData.map((row, index) => (
                <tr
                key={index}
                className={row.year === selectedYear ? 'selectedData' : ''}
                onClick={() => onRowClick(row.year)}
                >
                  <td>{row.year}</td>
                  <td>{row.F}</td>
                  <td>{row.M}</td>
                </tr>

            ))}
            </tbody>
        </table>

        {/* Pagination */}
        
        <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Précédent
            </button>
            <span>Page {currentPage} sur {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Suivant
            </button>
        </div>

    </div>
  );
}

export default Pivot;
