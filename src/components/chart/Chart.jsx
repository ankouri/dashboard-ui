import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, Typography } from "@material-ui/core";

export default function Chart({ title, grid, dataChart, dataChartKey }) {
  return (
    <div className="chart">
      <Card>
        <CardContent>
          <Typography component="h4" className="titleitem mr">
            {title}
          </Typography>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={dataChart}>
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
              <XAxis dataKey="name" stroke="#7d3aff" />
              <Tooltip />

              <Legend />
              <Line type="monotone" dataKey={dataChartKey} stroke="#7d3aff" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
