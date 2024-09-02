import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../localStorage/lista";



export const List = ({ list, handleDelete }) => {


  return (
    <ol>
      {list.map((task) => (
        <li key={task}>
          {task} <button onClick={() => handleDelete(task)}>Eliminar</button>
        </li>
      ))}
    </ol>
  );
};
