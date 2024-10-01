import React from 'react';
import { PieChart as RechartPieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#FF8042'];

function PieChart({ selectedYearData }) {

    // Générer les données pour le PieChart
    const getPieChartData = (maleName, femaleName, maleCount, femaleCount) => [
        { name: maleName, value: maleCount },
        { name: femaleName, value: femaleCount },
    ];

    return (
        <div className='piechart-container'>
            {/* Graphique à secteurs affiché uniquement si une année est sélectionnée */}
            {selectedYearData && (
                <div className="chart-container">
                    <h3>Répartition des prénoms pour l'année {selectedYearData.year}</h3>
                    <ResponsiveContainer width="100%" height={400}>
                        <RechartPieChart>
                            <Pie
                                data={getPieChartData(
                                    selectedYearData.maleName,
                                    selectedYearData.femaleName,
                                    selectedYearData.maleCount,
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
                                {/* Boucle pour assigner les couleurs aux parts */}
                                {getPieChartData(
                                    selectedYearData.maleName,
                                    selectedYearData.femaleName,
                                    selectedYearData.maleCount,
                                    selectedYearData.femaleCount
                                ).map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </RechartPieChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
}

export default PieChart;
