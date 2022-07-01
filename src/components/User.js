import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";


function User(){
    return (
            <Paper elevation={0}  className="UserPaper">
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        Luis Cristuf
                        Administrador
                    </Grid>
                    <Grid item xs={6}>
                        Busquedas Habilitadas: 2
                        Busquedas Realizadas: 1
                    </Grid>
                    <Grid item xs={3}>
                        <EditIcon/>
                        <DeleteIcon/>
                    </Grid>
                </Grid>
            </Paper>
    );
}

export default User;