import { useState } from "react"
import { CreateTask } from "./components/CreateTask"
import { List } from "./components/List"
import { deteleLocalStorage, getLocalStorage, setLocalStorage } from "./localStorage/lista";


const initialState = getLocalStorage(); 

export const App = () => {

  const [list, setList] = useState(initialState ?? []);

  const handleSetList = (task) => {
    setList([...list, task]);
    setLocalStorage([...list, task]);
  }

  const handleDelete = (taskToDelete) => {
    setList(list.filter(receivedTask => receivedTask !== taskToDelete));
    setLocalStorage(list.filter(receivedTask => receivedTask !== taskToDelete));
  };

  return (
    <>
      <h1>Todo App</h1>

      <List list={ list } handleDelete={ handleDelete } />

      <CreateTask handleSetList={ handleSetList } />
    
    </>
  )
}
