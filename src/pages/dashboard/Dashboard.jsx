import React, { useState } from 'react';
import Pivot from '../../components/Pivot/Pivot';
import Bars from '../../components/Bars/Bars';
import PieChart from '../../components/PieChart/PieChart'; // Import du composant PieChart
import './Dashboard.css';

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

function Dashboard() {
  const [selectedYearData, setSelectedYearData] = useState(null); // État pour l'année sélectionnée
  const [filterStartYear, setFilterStartYear] = useState('');
  const [filterEndYear, setFilterEndYear] = useState('');

  // Filtrer les données par période (de A à B)
  const filteredData = data.filter(item => {
    const startYear = filterStartYear ? parseInt(filterStartYear) : null;
    const endYear = filterEndYear ? parseInt(filterEndYear) : null;

    if (!startYear && !endYear) return true;
    if (startYear && !endYear) return item.year >= startYear;
    if (!startYear && endYear) return item.year <= endYear;
    return item.year >= startYear && item.year <= endYear;
  });

  // Handler pour le clic sur une ligne du tableau
  const handleRowClick = (year) => {
    const yearData = data.find((item) => item.year === year);
    if (yearData) {
      setSelectedYearData(yearData);
    }
  };



  return (
    <div className="head-dashboard">

        <h1>Tableau de bord</h1>

        {/* Filtre par période */}
        <div className="filter-section">
            <input
            id="startYearFilter"
            type="number"
            value={filterStartYear}
            onChange={(e) => setFilterStartYear(e.target.value)}
            placeholder="Année de début"
            />
            <input
            id="endYearFilter"
            type="number"
            value={filterEndYear}
            onChange={(e) => setFilterEndYear(e.target.value)}
            placeholder="Année de fin"
            />
            <button onClick={() => setSelectedYearData(null)}>Réinitialiser</button>
        </div>

        <div style={{display: "flex", justifyContent: "space-around"}}>

            {/* Composant Pivot avec les données filtrées et la gestion du clic */}
            <Pivot
                data={filteredData}
                onRowClick={handleRowClick}
                selectedYear={selectedYearData ? selectedYearData.year : null}
            />

            {/* Passer les données de l'année sélectionnée à PieChart */}
            <PieChart selectedYearData={selectedYearData} />

        </div>

        <div style={{display: "flex", justifyContent: "center" , width:"100%" }}>
            
            {/* Passer les données filtrées à Bars */}
            <Bars data={filteredData} />

        </div>






    </div>
  );
}

export default Dashboard;
