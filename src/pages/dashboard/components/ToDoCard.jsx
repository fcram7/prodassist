import { 
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material';
import PropTypes from 'prop-types';

const ToDoCard = ({
  activityName,
  activityDescription,
  onClickEditBtn,
  onClickDeleteBtn,
  id
}) => {

  return ( 
    <>
      <CardContent>
        <Typography variant="h1" sx={{ fontSize: 20, mb: 2 }} gutterBottom>
          {activityName}
        </Typography>
        <Typography variant="p" sx={{ fontSize: 18 }}>
          {activityDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onClickEditBtn(id)}>
          Edit
        </Button>
        <Button size="small" onClick={() => onClickDeleteBtn(id)}>
          Delete
        </Button>
      </CardActions>
    </>
  );
}

ToDoCard.propTypes = {
  id: PropTypes.string,
  activityName: PropTypes.string,
  activityDescription: PropTypes.string,
  onClickEditBtn: PropTypes.func,
  onClickDeleteBtn: PropTypes.func,
}

export default ToDoCard;