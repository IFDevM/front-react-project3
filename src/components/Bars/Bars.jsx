import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Bars({ data }) {
  // Préparer les données pour le graphique
  const chartData = data.map(item => ({
    year: item.year,
    maleName: item.maleName,
    maleCount: item.maleCount,
    femaleName: item.femaleName,
    femaleCount: item.femaleCount
  }));

  return (
    <div style={{ width: '100%', height: 300, display: "flex",justifyContent: "center" }} >
        <ResponsiveContainer>
            <BarChart width={730} height={250} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="maleCount" name="Prénoms Hommes" fill="#8884d8" />
            <Bar dataKey="femaleCount" name="Prénoms Femmes" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
}

export default Bars;
