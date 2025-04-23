import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updatetodo } from '../app/slices/Todoslice'

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleSave = (id) => {
    if (editText.trim() !== "") {
      dispatch(updatetodo({ id, newText: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <>
      <div className="text-xl text-white font-semibold mb-2">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="text-black p-1 rounded mr-2 flex-1"
              />
            ) : (
              <div className="text-white flex-1">{todo.text}</div>
            )}

            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleUpdate(todo.id, todo.text)}
                  className="text-white bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
