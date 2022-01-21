import React from "react";
import "./largeWidget.css";
import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

export default function LargeWidget() {
  return (
    <div className="largewidget">
      <Card>
        <CardContent>
        <div className="cardheader">
          <Typography component="h4" className="titleitem mr">
          Last Transactions
          </Typography>
          <div className="viewall">View All</div>
          </div>
   
          <TableContainer>
            <Table className={""} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Customer </TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell  className="tableitem">
                    <div className="tablecell">
                      <Avatar src="assets/user.jpg" />
                      <div>ANKOURI ABDELLAH</div>
                    </div>
                  </TableCell>
                  <TableCell className="tableitem">
                    Jan 9, 2014 at 9:20 PM
                  </TableCell>
                  <TableCell className="tableitem">$122.20</TableCell>
                  <TableCell className="tableitem">
                    <Alert severity="success">Approved</Alert>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell  className="tableitem">
                    <div className="tablecell">
                      <Avatar src="assets/user.jpg" />
                      <div>ANKOURI ABDELLAH</div>
                    </div>
                  </TableCell>
                  <TableCell className="tableitem">
                    Jan 9, 2014 at 9:20 PM
                  </TableCell>
                  <TableCell className="tableitem">$122.20</TableCell>
                  <TableCell className="tableitem">
                    <Alert severity="info">Approved</Alert>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="tablecell">
                      <Avatar src="assets/user.jpg" />
                      <div>ANKOURI ABDELLAH</div>
                    </div>
                  </TableCell>
                  <TableCell className="tableitem">
                    Jan 9, 2014 at 9:20 PM
                  </TableCell>
                  <TableCell className="tableitem">$122.20</TableCell>
                  <TableCell className="tableitem">
                    <Alert severity="error">Approved</Alert>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="tablecell">
                      <Avatar src="assets/user.jpg" />
                      <div>ANKOURI ABDELLAH</div>
                    </div>
                  </TableCell>
                  <TableCell className="tableitem">
                    Jan 9, 2014 at 9:20 PM
                  </TableCell>
                  <TableCell className="tableitem">$122.20</TableCell>
                  <TableCell className="tableitem">
                    <Alert severity="success">Approved</Alert>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}
