import '../App.css';
import Paper from "@mui/material/Paper";

import User from '../components/User';
import Viewtitle from '../components/Viewtitle';
import Navbar from '../components/Navbar';



function Users() {
  const users = ["Jessy Kris", "James Segura", "Jack Pilar"];
  const items = [];

  for (let user of users){
    items.push(<User name={user} rol={"Administrador"} activeSearchs={2} doneSearchs={1} url="https://imgur.com/KkOwbfy.jpg"/>);
  }


  return (
    <div className="App">
      <Navbar>
        <Paper className="ViewContainer">
          <Viewtitle>
            Users
          </Viewtitle>
          {items}
        </Paper>
      </Navbar>
    </div>
    
  );
}

export default Users;
