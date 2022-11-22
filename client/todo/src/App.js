import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [list, setList] = React.useState([]);
  const [id, setId] = React.useState(0);
  const [isCreating, setIsCreating] = React.useState(false);

  const handleSaveAllClick = () => {
    console.log('hi');
  }

  const handleSaveClick = () => {
    const text = document.getElementById("newTask").value;
    setId(id => id + 1);
    setList(list => [...list.slice(0, list.length-1), 
      <div key={id}>
        {text}
      </div>
    ]);
    setIsCreating(isCreating => false);
  }

  const handleAddClick = () => {
    if(isCreating) {
      return;
    }
    setIsCreating(isCreating => true);
    setId(id => id + 1);
    setList(list => [...list, 
      <div key={id}>
        <textarea id="newTask"></textarea>
        <button onClick={handleSaveClick}>Save</button>
      </div>
    ]);
  };

  const handleEditClick = () => {
    console.log('hi');
  };

  return (
    <div>
      <header>To Do</header>
      <button onClick={handleAddClick}>Add item</button>
      <button onClick={handleSaveAllClick}>Save All</button>
      <div>
        {list.map((item) => {
          const handleRemoveClick = () => {
            setList(list => list.filter((entry) => entry !== item));
          };
          return (
            <div key={item} style={{ display: 'flex', border: '1px solid lightgray' }}>
              {item}
              <div style={{ flex: 1 }} /> {/* <-------------------- spacer element */}
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={handleRemoveClick}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
export default App;