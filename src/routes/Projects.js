import Navbar from '../components/Navbar.js'
import Paper from '@mui/material/Paper';
import Viewtitle from '../components/Viewtitle.js'

function Projects() {
  
    return (
      <div className="App">
        <Navbar>
          <Paper className="ViewContainer">
            <Viewtitle> 
                Projects
            </Viewtitle>
          </Paper>
        </Navbar>
      </div>
      
    );
  }
  
  export default Projects;