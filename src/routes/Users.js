import '../App.css';
import Paper from "@mui/material/Paper";

import User from '../components/User';
import Viewtitle from '../components/Viewtitle';
import Navbar from '../components/Navbar';



function Users() {
  const users = ["Jessy", "James", "Jack"];
  const items = [];

  for (let user of users){
    items.push(<User/>);
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
