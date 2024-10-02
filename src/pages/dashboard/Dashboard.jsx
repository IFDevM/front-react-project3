import React, { useState, useEffect } from 'react';
import Pivot from '../../components/Pivot/Pivot';
import Bars from '../../components/Bars/Bars';
import PieChart from '../../components/PieChart/PieChart'; 
import './Dashboard.css';
import { getBirthsByYears } from '../../services/api/api';

function Dashboard() {
  const [years, setYears] = useState([]);  // Utilisation de 'years'
  const [birthsByYears , setBirthsByYears] = useState(null);
  const [error , setError] = useState('');
  const [selectedYearData, setSelectedYearData] = useState(null);
  const [filterStartYear, setFilterStartYear] = useState('');
  const [filterEndYear, setFilterEndYear] = useState('');

  useEffect(() => {
    const execAsync = async () => {
      try{
        const response = await getBirthsByYears(1880, 1930);
        setBirthsByYears(response.data);
        console.log(birthsByYears);

      }
      catch (err) {
        setError(err?.message)
      }

    }

    execAsync()

  }, []);  // Le tableau vide signifie que cela sera exécuté une seule fois, au montage

  const applyFilters = () =>{

  }


  // Filtrer les données par période
  const filteredData = years.filter(item => {
    const startYear = filterStartYear ? parseInt(filterStartYear) : null;
    const endYear = filterEndYear ? parseInt(filterEndYear) : null;

    if (!startYear && !endYear) return true;
    if (startYear && !endYear) return item.year >= startYear;
    if (!startYear && endYear) return item.year <= endYear;
    return item.year >= startYear && item.year <= endYear;
  });

  const handleRowClick = (year) => {
    const yearData = years.find((item) => item.year === year);
    if (yearData) {
      setSelectedYearData(yearData);
    }
  };

  return (
    <div className="head-dashboard">
      <h1 style={{ color: "#1976D2" }}>Tableau de bord</h1>

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
        <button onClick={applyFilters}>Appliquer</button>
        <button onClick={() => setSelectedYearData(null)}>Réinitialiser</button>

      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Pivot
          data={filteredData}
          onRowClick={handleRowClick}
          selectedYear={selectedYearData ? selectedYearData.year : null}
        />

        <PieChart selectedYearData={selectedYearData} />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start", width: "90%" }}>
        <Bars data={filteredData} />
      </div>
    </div>
  );
}

export default Dashboard;
