import logo from './logo.png';
import './App.css';
import { Button, Card, CardContent, TextField } from '@mui/material';
import { Container } from '@mui/system';


const LoginForm = () =>{
  return <Card sx={{minWidth: 275}}  className="LoginCard">
  <CardContent className="LoginContent">
    <div>
      Bienvenido.
    </div>
    <div>
     <TextField id="outlined-basic" label="Email" variant="outlined" className="TextFieldStyle"/>
    </div>
    <div>
      <TextField id="outlined-basic" label="Contraseña" variant="outlined" className="TextFieldStyle"/>
    </div>
    <div>
      <Button variant="contained" className="PrimaryButtonStyle">Sign In</Button>
    </div>
    <div>
      <Button variant="outlined" className="SecondaryButtonStyle">Sign Up</Button>
    </div>
    
  </CardContent>
</Card>
}

const LoginLogo = () =>{
  return <div className="LogoContainer">
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
    Social Find
  </div>
}

const Login = () =>{
  return (
    <Container className="LoginContainer" maxWidth="sm">
      <LoginLogo></LoginLogo>
      <LoginForm></LoginForm>
    </Container>
  );
}


function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
