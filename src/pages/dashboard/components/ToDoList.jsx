import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Button, Grid, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ToDoList = () => {
  const card = (
    <>
      <CardContent>
        <Typography variant="h1" sx={{ fontSize: 20, mb: 2 }} gutterBottom>
          To-Do Title
        </Typography>
        <Typography variant="span" sx={{ fontSize: 14 }} component="div">
          12.00
        </Typography>
        <Typography variant="p" sx={{ fontSize: 18 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quisquam quas voluptatum fugiat magni cupiditate quaerat? Ullam error maxime ratione.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          Edit
        </Button>
        <Button size="small">
          Delete
        </Button>
      </CardActions>
    </>
  );

  return ( 
    <>
      <div className="dashboard-title">
        <h1 className="section-title">To-Do List</h1>
      </div>

      <div className="dashboard-content">
        <Button variant='outlined' sx={{ mb: 2.5 }} startIcon={<AddOutlinedIcon />}>
          Add new to-do list
        </Button>

        <Grid container spacing={3}>
          <Grid item xs={11}>
            <Card variant="outlined">
              {card}
            </Card>
          </Grid>
          <Divider />
          <Grid item xs={11}>
            <Card variant="outlined">
              {card}
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ToDoList;