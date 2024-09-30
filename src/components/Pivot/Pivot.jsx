import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './pivot.css';

const data = [
  { year: 2010, maleName: 'John', maleCount: 5, femaleName: 'Emily', femaleCount: 7 },
  { year: 2011, maleName: 'Michael', maleCount: 8, femaleName: 'Sophia', femaleCount: 9 },
  { year: 2012, maleName: 'David', maleCount: 12, femaleName: 'Emma', femaleCount: 10 },
  { year: 2013, maleName: 'James', maleCount: 15, femaleName: 'Olivia', femaleCount: 8 },
  { year: 2014, maleName: 'Robert', maleCount: 9, femaleName: 'Isabella', femaleCount: 7 },
  { year: 2015, maleName: 'William', maleCount: 10, femaleName: 'Mia', femaleCount: 11 },
  { year: 2016, maleName: 'Joseph', maleCount: 7, femaleName: 'Ava', femaleCount: 6 },
  { year: 2017, maleName: 'Charles', maleCount: 6, femaleName: 'Lily', femaleCount: 9 },
  { year: 2018, maleName: 'Thomas', maleCount: 8, femaleName: 'Amelia', femaleCount: 10 },
  { year: 2019, maleName: 'Daniel', maleCount: 9, femaleName: 'Sophia', femaleCount: 12 },
  { year: 2020, maleName: 'Matthew', maleCount: 11, femaleName: 'Harper', femaleCount: 13 },
];

// Couleurs pour le graphique
const COLORS = ['#0088FE', '#FF8042'];

function Pivot() {
  const [selectedYearData, setSelectedYearData] = useState(null);
//   const [filterYear, setFilterYear] = useState('');
  const [filterStartYear, setFilterStartYear] = useState('');
  const [filterEndYear, setFilterEndYear] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Filtrer les données par année
//   const filteredDataYear = filterYear ? data.filter(item => item.year === parseInt(filterYear)) : data;

    // Filtrer les données par période (de A à B)
    const filteredData = data.filter(item => {
        const startYear = filterStartYear ? parseInt(filterStartYear) : null;
        const endYear = filterEndYear ? parseInt(filterEndYear) : null;
    
        // Si ni l'année de début ni l'année de fin ne sont fournies, on renvoie toutes les données.
        if (!startYear && !endYear) return true;
    
        // Si seulement l'année de début est fournie
        if (startYear && !endYear) return item.year >= startYear;
    
        // Si seulement l'année de fin est fournie
        if (!startYear && endYear) return item.year <= endYear;
    
        // Si les deux années sont fournies, on filtre entre ces deux années.
        return item.year >= startYear && item.year <= endYear;
    });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const currentData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

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

  // Handler pour le clic sur une ligne du tableau
  const handleRowClick = (year) => {
    const yearData = data.find((item) => item.year === year);
    if (yearData) {
      setSelectedYearData(yearData);
    }
  };

  // Préparation des données pour le graphique en pourcentage
  const getPieChartData = (maleName, maleCount, femaleName, femaleCount) => {
    const total = maleCount + femaleCount;
    return [
      { name: maleName, value: (maleCount / total) * 100 },
      { name: femaleName, value: (femaleCount / total) * 100 },
    ];
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-start", width: "100%", alignItems: 'flex-start' }}>
      <div className="pivot-container">
        <h2>Tableau Pivot: Occurrences des prénoms par année</h2>

        {/* Filtre par année */}
        {/* <div className="filter-section">
          <label htmlFor="yearFilter">Filtrer par année :</label>
          <input
            id="yearFilter"
            type="number"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            placeholder="Entrez une année"
          />
        </div> */}

        {/* Filtre par période */}
        <div className="filter-section">
          <label htmlFor="startYearFilter">De :</label>
          <input
            id="startYearFilter"
            type="number"
            value={filterStartYear}
            onChange={(e) => setFilterStartYear(e.target.value)}
            placeholder="Année de début"
          />
          <label htmlFor="endYearFilter">À :</label>
          <input
            id="endYearFilter"
            type="number"
            value={filterEndYear}
            onChange={(e) => setFilterEndYear(e.target.value)}
            placeholder="Année de fin"
          />
        </div>

        <table className="pivot-table">
          <thead>
            <tr>
              <th>Année</th>
              <th>Prénom Homme</th>
              <th>Occurrences Homme</th>
              <th>Prénom Femme</th>
              <th>Occurrences Femme</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr className={selectedYearData && selectedYearData.year === row.year ? 'selectedData' : ""} key={index} onClick={() => handleRowClick(row.year)}>
                <td>{row.year}</td>
                <td>{row.maleName}</td>
                <td>{row.maleCount}</td>
                <td>{row.femaleName}</td>
                <td>{row.femaleCount}</td>
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

      {/* Graphique à secteurs affiché au clic sur une ligne */}
      {selectedYearData ? (
        <div className="piechart-container">
          <h3>Répartition des prénoms pour l'année {selectedYearData.year}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={getPieChartData(
                  selectedYearData.maleName,
                  selectedYearData.maleCount,
                  selectedYearData.femaleName,
                  selectedYearData.femaleCount
                )}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={100}
                fill="#8884d8"
                label
              >
                {getPieChartData(
                  selectedYearData.maleName,
                  selectedYearData.maleCount,
                  selectedYearData.femaleName,
                  selectedYearData.femaleCount
                ).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        ) :

        (
            <div className='model'>

            </div>
        )
    
    
    }
    </div>
  );
}

export default Pivot;
