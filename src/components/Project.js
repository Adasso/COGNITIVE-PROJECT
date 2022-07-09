import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

function Project(props){
    return (
            <Paper elevation={0}  className="UserPaper">
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <Box
                            component="img"
                            sx={{
                                height: 60,
                                width: 60,
                                maxHeight: { xs: 60, md:60},
                                maxWidth: { xs: 60, md: 60},
                                borderRadius: '16px',
                            }}
                            src={props.url}
                            />
                    </Grid>
                    <Grid item xs={3}>
                        <div>{props.name}</div>
                    </Grid>
                    <Grid item xs={5}>
                        <div> </div>
                    </Grid>
                    <Grid item xs={2}>
                        <EditIcon/>
                        <DeleteIcon/>
                    </Grid>
                </Grid>
            </Paper>
    );
}

export default Project;