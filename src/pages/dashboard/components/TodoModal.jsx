import {
  Box,
  Button,
  Modal,
  TextField,
  Typography
} from '@mui/material';
import PropTypes from 'prop-types';

const TodoModal = ({
  id,
  open,
  handleClose,
  activityName,
  activityDescription,
  activityNameChangeHandler,
  activityDescriptionChangeHandler,
  onAddHandler,
  edit,
  onEditHandler,
  todoDelete,
  onDeleteHandler
}) => {
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (edit) {
      onEditHandler(id)
    } else if (todoDelete) {
      onDeleteHandler(id)
    } else {
      onAddHandler()
    }
  }
  return ( 
    <>
      <div className="todo-modal__container">
        <div className="todo-modal__content">
          <Modal 
            open={open} 
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-subtitle"
          >
            <Box sx={style}>
              {todoDelete ? (
                <>
                  <Typography id="modal-title" variant="h4">
                    Delete To-do
                  </Typography>
                  <Typography id="modal-subtitle" variant="h6">
                    Delete this activity?
                  </Typography>
                  
                  <Button variant="contained" onClick={onSubmitHandler}>
                    Delete
                  </Button>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel Delete
                  </Button>
                </>
              ) : (
                <>
                  <Box sx={style} component="form">
                    <Typography id="modal-title" variant="h4">
                      {edit ? 'Edit To-do' : 'Add To-do'}
                    </Typography>
                    <Typography id="modal-subtitle" variant="h6">
                      {edit ? 'Edit your activity' : 'Add your new activity'}
                    </Typography>

                    <TextField 
                      fullWidth 
                      margin="dense" 
                      value={activityName} 
                      onChange={activityNameChangeHandler} 
                      label="Activity Name" 
                      variant="standard"
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
                      variant="standard"
                      id="standard-multiline-static"
                      type="text"
                    />
                    <Button sx={{ mt: 2 }} type="submit" onClick={onSubmitHandler} variant="outlined">
                      {edit ? 'Edit Todo' : 'Add Todo'}
                    </Button>
                  </Box>

                  {edit ? (
                    <div>
                      <Typography id="modal-current-activity" variant="body1">
                        {activityName}
                      </Typography>
                      <Typography id="modal-current-activity-description" variant="body1">
                        {activityDescription}
                      </Typography>
                    </div>
                  ) : ""}
                </>
                )
              }
            </Box>

            {/* <Box sx={style} component="form">
              <Typography id="modal-title" variant="h4">
                {edit ? 'Add To-do' : 'Edit To-do'}
              </Typography>
              <Typography id="modal-subtitle" variant="h6">
                {edit ? 'Edit your activity' : 'Add your new activity'}
              </Typography>

              <TextField 
                fullWidth 
                margin="dense" 
                value={activityName} 
                onChange={activityNameChangeHandler} 
                label="Activity Name" 
                variant="standard"
                id="standard-basic"
                type="text"
                defaultValue={edit ? activityName : ''}
              />
              <TextField 
                fullWidth 
                margin="normal" 
                value={activityDescription} 
                onChange={activityDescriptionChangeHandler} 
                label="Activity Description" 
                multiline 
                rows={6} 
                variant="standard"
                id="standard-multiline-static"
                type="text"
                defaultValue={edit ? activityDescription : ''}
              />
              <Button sx={{ mt: 2 }} type="submit" onClick={onSubmitHandler} variant="outlined">Add Todo</Button>
            </Box>

            {edit ? (
              <div>
                <Typography id="modal-current-activity" variant="h4">
                  {activityName}
                </Typography>
                <Typography id="modal-current-activity-description" variant="h6">
                  {activityDescription}
                </Typography>
              </div>
            ) : ""} */}
            {/* <Typography id="modal-current-activity" variant="h4">
              {activityName}
            </Typography>
            <Typography id="modal-current-activity-description" variant="h6">
              {activityDescription}
            </Typography> */}
          </Modal>
        </div>
      </div>
    </>
  );
}

TodoModal.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  activityName: PropTypes.string,
  activityDescription: PropTypes.string,
  activityNameChangeHandler: PropTypes.func,
  activityDescriptionChangeHandler: PropTypes.func,
  edit: PropTypes.bool,
  onAddHandler: PropTypes.func,
  onEditHandler: PropTypes.func,
  todoDelete: PropTypes.bool,
  onDeleteHandler: PropTypes.func,
}

export default TodoModal;