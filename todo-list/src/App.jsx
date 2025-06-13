import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [array, setArray] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track which item is being edited
  const [editText, setEditText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      setArray([...array, text]);
      setText('');
    }
  };

  const handleDelete = (index) => {
    const updatedArray = array.filter((_, i) => i !== index);
    setArray(updatedArray);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(array[index]);
  };

  const handleSaveEdit = () => {
    const updatedArray = [...array];
    updatedArray[editIndex] = editText;
    setArray(updatedArray);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className='border h-screen w-full flex flex-col items-center pt-8'>
      <div className='text-2xl font-bold'>Todo List</div>

      <input
        type='text'
        placeholder='Enter the item'
        className='border-2 my-4 px-2 py-1'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className='bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600'
      >
        Submit
      </button>

      <div className='mt-4 w-1/2'>
        {array.map((item, index) => (
          <div key={index} className='border p-2 my-1 rounded flex justify-between items-center'>
            {editIndex === index ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className='border px-2 py-1 mr-2 flex-1'
              />
            ) : (
              <span className='flex-1'>{item}</span>
            )}

            {editIndex === index ? (
              <button
                onClick={handleSaveEdit}
                className='bg-green-500 text-white px-2 py-1 mx-1 rounded'
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(index)}
                className='bg-yellow-500 text-white px-2 py-1 mx-1 rounded'
              >
                Edit
              </button>
            )}

            <button
              onClick={() => handleDelete(index)}
              className='bg-red-500 text-white px-2 py-1 rounded'
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
