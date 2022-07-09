import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Avatar from '@mui/material/Avatar';


function User(props){
    return (
            <Paper elevation={0}  className="UserPaper">
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <Avatar src={props.url}></Avatar>
                    </Grid>
                    <Grid item xs={3}>
                        <div>{props.name}</div>
                        <div>{props.email}</div>
                    </Grid>
                    <Grid item xs={5}>
                        <div>Busquedas Habilitadas: {props.activeSearchs}</div>
                        <div>Busquedas Realizadas: {props.doneSearchs}</div>
                    </Grid>
                    <Grid item xs={2}>
                        <EditIcon/>
                        <DeleteIcon/>
                    </Grid>
                </Grid>
            </Paper>
    );
}

export default User;