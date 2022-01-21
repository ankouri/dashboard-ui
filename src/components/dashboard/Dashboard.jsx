import React from "react";
import FeaturedInfo from "./../featuredInfo/FeaturedInfo";
import Chart from "./../chart/Chart";
import { Grid } from "@material-ui/core";
import SmallWidget from "./../widget/SmallWidget";
import LargeWidget from "./../widget/LargeWidget";
import { userData } from "../../dummyData";

export default function Dashboard() {
  return (
    <div>
      <FeaturedInfo />
      <Chart
        dataChart={userData}
        title="Active Users Analytics"
        grid
        dataChartKey="Active Users"
      />
      <Grid container>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <SmallWidget />
        </Grid>
        <Grid item lg={8} md={8} sm={6} xs={12}>
          <LargeWidget />
        </Grid>
      </Grid>
    </div>
  );
}
