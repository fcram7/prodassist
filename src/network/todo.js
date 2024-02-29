import { auth, db } from '../utils/firebase';
import { collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, getDoc, doc } from 'firebase/firestore';

const Todo = {
  async getAllTodo() {
    const todos = [];
    const todoRef = collection(db, 'todos');
    const todoQuery = query(todoRef, where('userId', '==', auth.currentUser.uid));
    const querySnapshot = await getDocs(todoQuery)

    querySnapshot.forEach((todoItem) => {
      todos.push({
        id: todoItem.id,
        ...todoItem.data(),
      })
    })

    return todos;
  },

  async getTodoById (id) {
    const todoRef = doc(db, 'todos', id)
    const docSnapshot = await getDoc(todoRef)

    return docSnapshot.data()
  },

  async addTodo({ activityName, activityDescription }) {
    const todoRef = collection(db, 'todos')
    const todoData = { activityName, activityDescription }

    return await addDoc(todoRef, {
      userId: auth.currentUser.uid,
      ...todoData,
    })
  },

  async updateTodo({ id, activityName, activityDescription }) {
    const todoRef = doc(db, 'todos', id)
    const todoData = { activityName, activityDescription }

    return await updateDoc(todoRef, todoData)
  },

  async deleteTodo(id) {
    const todoRef = doc(db, 'todos', id)

    return await deleteDoc(todoRef)
  }
}

export default Todo;