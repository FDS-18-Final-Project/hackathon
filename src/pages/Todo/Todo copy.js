import React from 'react';
import Styled from 'styled-components';

// components
const Input = () => {
  return <input type='text' id='myInput' placeholder='Title...' />;
};

const Button = () => {
  const handleAddTodo = () => {};

  return <button type='button'>Add</button>;
};

const Checkbox = () => {
  return <input type='checkbox' onChange={() => console.log('haha')} />;
};

const TodoItem = props => {
  return (
    <div>
      <Checkbox />
      <span className='desc'>hee</span>
      <button onClick={() => console.log('test')}>Remove</button>
    </div>
  );
};

// reducer : create, delete, update
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return {
        todos: [...state.todos, action.todo]
      };
    case 'DELETE':
      return {
        todos: [...state.todos.filter(todo => todo.id !== action.id)]
      };
    case 'UPDATE':
      return {};
    case 'PATCH':
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.id) return { ...todo, done: !todo.done };
          return todo;
        })
      };
    default:
      return state;
  }
};
// style
const StyledTodoContainer = Styled.section`
  .header-container {
    width: 1200px;
    margin: 0 auto
  }
`;

const Todo = () => {
  let todoId = React.useRef(0);
  const generateId = () => {
    todoId.current = todoId.current + 1;
    return `todo-` + todoId.current;
  };

  // todo: id, desc, done,createDate,categories
  const initalTodo = {
    todos: [
      {
        id: generateId(),
        desc: 'todo',
        done: false,
        createDate: ''
      }
    ]
  };

  const [state, dispatch] = React.useReducer(todoReducer, initalTodo);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <StyledTodoContainer>
      <div className='header-container'>
        <Todo.Header />
        <Todo.Body />
      </div>
    </StyledTodoContainer>
  );
};

Todo.Header = () => (
  <div id='myDIV'>
    <h2>My To Do List</h2>
    <Input />
    <Button>Add</Button>
  </div>
);

Todo.Body = props => {
  return <ul id='myUL'>TodoItem</ul>;
};

export default Todo;
