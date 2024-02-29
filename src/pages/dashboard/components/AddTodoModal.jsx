import {
  Box,
  Button,
  Modal,
  TextField,
  Typography
} from '@mui/material';

import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import Todo from '../../../network/todo';
import toast from 'react-hot-toast';

const AddTodoModal = ({ open, handleClose }) => {
  const [activityName, activityNameChangeHandler] = useInput("")
  const [activityDescription, activityDescriptionChangeHandler] = useInput("")

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await Todo.addTodo({
        activityName: activityName,
        activityDescription: activityDescription, 
      })
      return toast.success('New Activity Added!')
    } catch (error) {
      console.error(error)
      return toast.error(`Oops! There is an error ${error}`)
    }
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: '#F1F2EE',
    color: '#515052',
    border: 'solid 1px #000',
    boxShadow: 24,
    p: 4,
  }

  return ( 
    <>
      <div className="add-todo-modal__container">
        <div className="add-todo-modal__content">
          <Modal 
            open={open} 
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-subtitle"
          >
            <Box sx={style} component="form">
              <Typography id="modal-title" variant="h4">
                Add To-Do
              </Typography>
              <Typography id="modal-subtitle" variant="h6">
                Add your new activity
              </Typography>

              <TextField 
                fullWidth 
                margin="dense" 
                value={activityName} 
                onChange={activityNameChangeHandler} 
                label="Activity Name" 
                variant="standard"
                defaultValue="Default Value"
                id="standard-basic"
                type="text"
              />
              <TextField 
                fullWidth 
                margin="normal" 
                value={activityDescription} 
                onChange={activityDescriptionChangeHandler} 
                label="Activity Description" 
                multiline 
                rows={6} 
                defaultValue="Default Value"
                variant="standard"
                id="standard-multiline-static"
                type="text"
              />
              <Button sx={{ mt: 2 }} type="submit" onClick={onSubmitHandler} variant="outlined">Add Todo</Button>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
}

AddTodoModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
}
export default AddTodoModal;