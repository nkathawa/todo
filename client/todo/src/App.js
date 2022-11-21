import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: Array(0),
    }
  }

  render() { 
    return (
      <div>
        <div >
          <header >
            <p>
              ToDo App
            </p>
          </header>
        </div>
        <AddButton onClick={() => this.props.onClick()}/>
        <List id="list"/>
      </div>
    );
  }
}

class Item extends React.Component {
  render(i) {
    return (
      <div>
          {this.props.value}
      </div>
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.setState({
      added: false,
      list: Array(0),
    })
  }

  renderItem(i) {
    return (
      <Item
          value={i} 
          onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
    }
  }

  handleClick() {
    // console.log("hi");
    this.setState({
      added: true,
    })
  }
  
  render() {
    return (
      <>
      <div>
        <button onClick={() => this.handleClick()}>Add</button>
      </div>
      <List added={this.state.added}/>
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
