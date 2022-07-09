import { Grid, Button } from "@mui/material";

function Viewtitle(props){
    return (
        <Grid container>
            <Grid items xs={6}>
                <h2 className="ViewTitle">{props.children}</h2>
            </Grid>
            <Grid items xs={6}>
                <div className="ButtonContainer">
                    <Button variant="contained" className="PrimaryButtonStyle">Actualizar</Button>
                </div>
            </Grid>
        </Grid>
    );
}

export default Viewtitle;