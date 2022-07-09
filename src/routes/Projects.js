import Navbar from '../components/Navbar.js'
import Paper from '@mui/material/Paper';
import Viewtitle from '../components/Viewtitle.js'
import Project from '../components/Project.js';

function Projects() {


  const projects = ["MC Donalds", "UTEC"];
  const imgUrl = [
    "https://th.bing.com/th/id/R.bddb092bd4308d7ae43f26869c83958d?rik=HeJ2pa%2bV%2bVtLkg&riu=http%3a%2f%2fwww.bhwt.org.uk%2fwp-content%2fuploads%2f2015%2f03%2fMcdonalds_Logo.jpg&ehk=0D7r2idvlHbCmzO78w9RU8t5x%2bMiD4KqIug9A%2bSKH6s%3d&risl=&pid=ImgRaw&r=0",
    "https://negocio.pe/sites/negocio.logicaldesign.pe/files/styles/maxima_imagen/public/logo_con_aire_-_copia.png?itok=5yf7iv9q"
  ]
  const items = [];

  projects.map((project,index) => {
    items.push(<Project name={project} url={imgUrl[index]}/>);
  })
  
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
