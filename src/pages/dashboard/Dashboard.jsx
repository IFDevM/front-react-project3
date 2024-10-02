import React, { useState, useEffect } from "react";
import Pivot from "../../components/Pivot/Pivot";
import PieChart from "../../components/PieChart/PieChart";
import BarChart from "../../components/BarChart/BarChart";
import "./Dashboard.css";
import { getBirthsByYears } from "../../services/api/api";

function Dashboard() {
  const [years, setYears] = useState([]); // Utilisation de 'years'
  const [birthsByYears, setBirthsByYears] = useState([]);
  const [error, setError] = useState("");
  const [selectedYearData, setSelectedYearData] = useState({
    values: [],
    labels: ["Homme", "Femme"],
    title: ""
  });
  const [barChartData, setBarChartData] = useState({
    xValues: [],
    yValues: [],
    title: "Naissances par année",
    xTitle: "Années",
    yTitle: "Naissances"
  })
  const [filterStartYear, setFilterStartYear] = useState(0);
  const [filterEndYear, setFilterEndYear] = useState(0);

  const execAsync = async (start, end) => {
    try {
      const response = await getBirthsByYears(start, end);
      setBirthsByYears(response.data);
      setBarChartData((prevState) => ({...prevState, xValues: response.data.map(elmt => elmt.year)}))
      setBarChartData((prevState) => ({...prevState, yValues: response.data.map(elmt => elmt.F+elmt.M)}))
      console.log(barChartData)
    } catch (err) {
      setError(err?.messag);
    }
  };

  useEffect(() => {
    execAsync(1880, 1930);
  }, []); // Le tableau vide signifie que cela sera exécuté une seule fois, au montage

  const applyFilters = () => {
    if(filterEndYear && filterStartYear){
      execAsync(filterStartYear, filterEndYear)
    }
  };

  // Filtrer les données par période
  /* const filteredData = years.filter((item) => {
    const startYear = filterStartYear ? parseInt(filterStartYear) : null;
    const endYear = filterEndYear ? parseInt(filterEndYear) : null;

    if (!startYear && !endYear) return true;
    if (startYear && !endYear) return item.year >= startYear;
    if (!startYear && endYear) return item.year <= endYear;
    return item.year >= startYear && item.year <= endYear;
  }); */

  const handleRowClick = (year) => {
    const yearData = birthsByYears.find((item) => item.year === year);
    if (yearData) {
      setSelectedYearData(prevState => ({...prevState, values: [yearData.M, yearData.F]}))
      setSelectedYearData(prevState => ({...prevState, title: "Proportions d'hommes et de femmes"}))
    }
  };

  return (
    <div className="head-dashboard">
      <h1 style={{ color: "#1976D2" }}>Tableau de bord</h1>

      <div className="filter-section mx-auto">
        <input
          id="startYearFilter"
          type="number"
          value={filterStartYear}
          onChange={(e) => setFilterStartYear(parseInt(e.target.value))}
          placeholder="Année de début"
        />
        <input
          id="endYearFilter"
          type="number"
          value={filterEndYear}
          onChange={(e) => setFilterEndYear(parseInt(e.target.value))}
          placeholder="Année de fin"
        />
        <button onClick={applyFilters}>Appliquer</button>
        <button onClick={() => setSelectedYearData(null)}>Réinitialiser</button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {birthsByYears && (
          <Pivot
            data={birthsByYears}
            onRowClick={handleRowClick}
            selectedYear={selectedYearData ? selectedYearData.year : null}
          />
        )}

        <PieChart selectedYearData={selectedYearData} />
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", width: "90%" }}
      >
        {
          (barChartData.xValues.length > 0 && barChartData.yValues.length > 0) && (
            <BarChart barChartData={barChartData} />
          )
        }
      </div>
    </div>
  );
}

export default Dashboard;
