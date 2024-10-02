import React from "react";
import Plot from "react-plotly.js";

const BarChart = ({ barChartData }) => {
  return (
    <div>
      {barChartData.xValues.length > 0 && barChartData.yValues.length > 0 && (
        <Plot
          data={[
            {
              type: "bar",
              x: barChartData.xValues,
              y: barChartData.yValues,
              marker: { color: "rgb(26, 118, 255)" }, // Couleur des barres
            },
          ]}
          layout={{
            title: barChartData.title,
            xaxis: { title: barChartData.xTitle },
            yaxis: { title: barChartData.yTitle },
            autosize: true
          }}
          useResizeHandler={true}
          style={{ width: '100%', height: '100%'}}
        />
      )}
    </div>
  );
};

export default BarChart;
