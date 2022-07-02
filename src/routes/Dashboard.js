import '../App.css';
import  Linearbar from '../components/Linearbar.js'
import Piechart from '../components/Piechart';
import Paper from "@mui/material/Paper";
import Viewtitle from '../components/Viewtitle';
import Navbar from '../components/Navbar';
import { Grid } from '@mui/material';



function Dashboard() {
  return (
    <div className="App">
      
      <Navbar>
      <Grid container >
            <Grid items xs={7}>
            <Paper className="ViewContainer">
              <Viewtitle>
                Dashboard
              </Viewtitle>
              <Linearbar/>
            </Paper>
            </Grid>
            <Grid items xs={1}>

            </Grid>
            <Grid items xs={3}>
              <Paper className="ViewContainer">
                <Viewtitle>
                  Metric
                </Viewtitle>
                <Piechart></Piechart>
              </Paper>
            </Grid>
        </Grid>

      </Navbar>
    </div>
  );
}

export default Dashboard;
