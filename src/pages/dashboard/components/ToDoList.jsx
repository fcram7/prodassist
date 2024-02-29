import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Button, Grid, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import ToDoCard from './ToDoCard';
// import AddTodoModal from './addTodoModal';
import Todo from '../../../network/todo';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import TodoModal from './TodoModal';
import useInput from '../../../hooks/useInput';

const ToDoList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [todoEdit, setTodoEdit] = useState(false);
  const [todoDelete, setTodoDelete] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [todos, setTodos] = useState([]);

  const [activityName, activityNameChangeHandler] = useInput("")
  const [activityDescription, activityDescriptionChangeHandler] = useInput("")

  //OPEN & CLOSE MODALS
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => {
    setOpenModal(false)
    setTodoEdit(false)
    setTodoDelete(false)
  }

  //EDIT & DELETE MODALS UI HANDLER
  const handleEdit = (id) => () => {
    setTodoEdit(true)
    handleOpen()
    setSelectedId(id)
  }
  const handleDelete = (id) => () => {
    setTodoDelete(true)
    handleOpen()
    setSelectedId(id)
  }

  //FETCH ALL TODOS FUNCTION
  const fetchTodos = async () => {
    try {
      const todoData = await Todo.getAllTodo()
      setTodos(todoData)
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const authUser = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user)
      if (user) {
        try {
          await fetchTodos()
        } catch (error) {
          console.error(error)
        }
      }
    })

    return () => {
      authUser()
    }
  }, [])

  const onAddHandler = async () => {
    try {
      await Todo.addTodo({
        activityName: activityName,
        activityDescription: activityDescription, 
      })

      fetchTodos()
      handleClose()
      
      return toast.success('New Activity Added!')
    } catch (error) {
      console.error(error)
      return toast.error(`Oops! There is an error ${error}`)
    }
  }

  const onEditHandler = async (id) => {
    try {
      await Todo.updateTodo({
        activityName: activityName,
        activityDescription: activityDescription,
        id: id
      })
      fetchTodos()
      handleClose()

      return toast.success('Succesfully edited your activity!')
    } catch (error) {
      console.error(error)
      return toast.error(`Oops! there is an error ${error}`)
    }
  }

  const onDeleteHandler = async (id) => {
    try {
      await Todo.deleteTodo(id);
      fetchTodos()
      handleClose()

      return toast.success('Successfully deleted an activity!')
    } catch (error) {
      console.error(error)
      return toast.error(`Oops! There is an error ${error}`)
    }
  }

  return ( 
    <>
      <div className="dashboard-title">
        <h1 className="section-title">To-Do List</h1>
      </div>

      <div className="dashboard-content">
        <Button variant='outlined' onClick={handleOpen} sx={{ mb: 2.5 }} startIcon={<AddOutlinedIcon />}>
          Add new to-do list
        </Button>

        {currentUser && todos ?
          (
            todos.map((todo) => (
              <Grid container spacing={3} key={todo.id}>
                <Grid item xs={11}>
                  <Card variant="outlined">
                    <ToDoCard
                      id={todo.id}
                      activityName={todo.activityName} 
                      activityDescription={todo.activityDescription}
                      onClickEditBtn={handleEdit(todo.id)}
                      onClickDeleteBtn={handleDelete(todo.id)}
                    />
                  </Card>
                </Grid>
                <Divider />
              </Grid>
            ))
          ) :
          (<h1>Empty Todo List!</h1>)
        }
      </div>

      <TodoModal
        id={selectedId}
        open={openModal}
        handleClose={handleClose}
        activityName={activityName}
        activityDescription={activityDescription}
        activityNameChangeHandler={activityNameChangeHandler}
        activityDescriptionChangeHandler={activityDescriptionChangeHandler}
        edit={todoEdit}
        todoDelete={todoDelete}
        onAddHandler={onAddHandler}
        onEditHandler={onEditHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </>
  );
}

export default ToDoList;