import '../App.css';
import { Link } from "react-router-dom";
import  Linearbar from '../components/Linearbar.js'
import Piechart from '../components/Piechart';
import Paper from "@mui/material/Paper";
import Viewtitle from '../components/Viewtitle';
import Navbar from '../components/Navbar';



function Dashboard() {
  return (
    <div className="App">
      
      <Navbar>
        <Paper className="ViewContainer">
          <Viewtitle>
            Dashboard
          </Viewtitle>
          <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Linearbar/>
      <Piechart></Piechart>
        </Paper>
      </Navbar>
    </div>
  );
}

export default Dashboard;
