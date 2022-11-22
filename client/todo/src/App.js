import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [saveChangesButtonPopup, setSaveChangesButtonPopup] = useState(false);
  const [list, setList] = React.useState([]);
  const [id, setId] = React.useState(0);
  const [isCreating, setIsCreating] = React.useState(false);

  const handleSaveAllClick = () => {
    console.log('hi');
  }

  const handleSaveClick = () => {
    const text = document.getElementById("newTask").value;
    setId(id => id + 1);
    console.log(id);
    setList(list => [...list, 
      <div key={id}>
        {text}
      </div>
    ]);
    setIsCreating(isCreating => false);
    setButtonPopup(false);
  }

  const handleSaveChangesClick = () => {
    const text = document.getElementById("editPopup").value;
    // setId(id => id + 1);
    // console.log(id);
    setList(list => [...list, 
      <div key={id}>
        {text}
      </div>
    ]);
    setIsCreating(isCreating => false);
    setSaveChangesButtonPopup(false);
  }

  const handleAddClick = () => {
    if(isCreating) {
      console.log('creating');
      return;
    }
    setIsCreating(isCreating => true);
    // setId(id => id + 1);
    // setList(list => [...list, 
    //   <div key={id}>
    //     <textarea id="newTask"></textarea>
    //     <button onClick={handleSaveClick}>Save</button>
    //   </div>
    // ]);
    setButtonPopup(true);
  };

  const handleEditClick = () => {
    console.log('hi');
    setSaveChangesButtonPopup(true);
  };

  return (
    <div>
      <header><h1>To Do</h1></header>
      <main>
        <div className='topButtons'>
          <button onClick={handleAddClick}>Add item</button>
          <button onClick={handleSaveAllClick}>Save All</button>
        </div>
        <br></br>
        <div className='list'>
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
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} save={handleSaveClick}>
        <h3>My popup</h3>
      </Popup>
      <EditPopup id="editPopup" trigger={saveChangesButtonPopup} setTrigger={setSaveChangesButtonPopup} save={handleSaveChangesClick}>
        <h3>My popup</h3>
      </EditPopup>
    </div>
  );
};

function EditPopup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <textarea id="newTask"></textarea>
      <button onClick={props.save}>Save Changes</button>
    </div>
  ) : "";
}

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <textarea id="newTask"></textarea>
      <button onClick={props.save}>Save</button>
    </div>
    // <div className='popup'>
    //   <div className='popup-inner'>
    //     <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
    //     { props.children }
    //   </div>
    // </div>
  ) : "";
}

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
export default App;