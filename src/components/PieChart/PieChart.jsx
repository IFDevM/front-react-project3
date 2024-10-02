import React from 'react';
import Plot from 'react-plotly.js';

const COLORS = ['#0088FE', '#FF8042'];

function PieChart({ selectedYearData }) {


    return (
        <div className='piechart-container'>
            {/* Graphique à secteurs affiché uniquement si une année est sélectionnée */}
            {selectedYearData && (
                <div className="chart-container">
                    <h3>Répartition des prénoms pour l'année {selectedYearData.year}</h3>
                    <Plot
                        data={[
                            {
                                type: 'pie',
                                labels: selectedYearData.labels,
                                values: selectedYearData.values,
                                marker: {
                                    colors: COLORS,
                                },
                                textinfo: 'label+percent',
                                hoverinfo: 'label+value',
                                hole: 0.5
                            }
                        ]}
                        layout={{
                            width: 500,
                            height: 400,
                            title: selectedYearData.title,
                            showlegend: true,
                            margin: { t: 40, l: 10, r: 10, b: 40 },
                        }}
                        style={{ width: '100%' }}
                    />
                </div>
            )}
        </div>
    );
}

export default PieChart;
