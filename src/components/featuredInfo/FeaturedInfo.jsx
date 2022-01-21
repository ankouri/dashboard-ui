import React from "react";
import "./featuredInfo.css";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { ArrowDownwardTwoTone, ArrowUpwardTwoTone} from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div className="featuredInfo">
      <Grid container spacing={2}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card>
            <CardContent>
                <Typography component="h3" className="titleitem">
                           Revanue     
                </Typography>
                <div className="statusitem">
                    <Typography component="h2" className="itemprice">
                            $2.562     
                    </Typography>
                    <Typography component="h4" className="itemchange">
                         $156     <ArrowDownwardTwoTone color="error"/>   
                    </Typography>
                </div>
                <Typography component="h2" className="iteminfo">
                           Compared to last month     
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card>
            <CardContent>
            <Typography component="h3" className="titleitem">
                           Sales     
                </Typography>
                <div className="statusitem">
                    <Typography component="h2" className="itemprice">
                            $1.652     
                    </Typography>
                    <Typography component="h4" className="itemchange">
                         $1562     <ArrowUpwardTwoTone className="success"/>   
                    </Typography>
                </div>
                <Typography component="h2" className="iteminfo">
                           Compared to last month     
                </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card>
            <CardContent>
            <Typography component="h3" className="titleitem">
                          Cost    
                </Typography>
                <div className="statusitem">
                    <Typography component="h2" className="itemprice">
                            $2.152     
                    </Typography>
                    <Typography component="h4" className="itemchange">
                         $1562     <ArrowDownwardTwoTone color="error"/>   
                    </Typography>
                </div>
                <Typography component="h2" className="iteminfo">
                           Compared to last month     
                </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
