import logo from './logo.svg';
import './App.css';
import TodoListContainer from './components/TodoList';
import TodoFormContainer from './components/TodoForm';
import UserListContainer from './containers/UserListContainer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserListContainer />
        <TodoListContainer />
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
