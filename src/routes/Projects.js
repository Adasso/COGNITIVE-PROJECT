import Navbar from '../components/Navbar.js'
import Paper from '@mui/material/Paper';
import Viewtitle from '../components/Viewtitle.js'
import Project from '../components/Project.js';

function Projects() {

  const projects = ["Jessy Kris", "James Segura", "Jack Pilar"];
  const items = [];

  for (let project of projects){
    items.push(<Project name={project} url="https://imgur.com/KkOwbfy.jpg"/>);
  }
  
    return (
      <div className="App">
        <Navbar>
          <Paper className="ViewContainer">
            <Viewtitle> 
                Projects
            </Viewtitle>
            {items}
          </Paper>
        </Navbar>
      </div>
      
    );
  }
  
  export default Projects;
