import React from 'react';
import Styled from 'styled-components';

// components
const Input = ({ inputValue, setInputValue }) => {
  return (
    <input
      type='text'
      id='myInput'
      placeholder='Title...'
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
    />
  );
};

const Button = ({ dispatch, inputValue, generateId, setInputValue }) => {
  const handleAddTodo = () => {
    setInputValue('');
    dispatch({
      type: 'CREATE',
      todo: { id: generateId(), desc: inputValue, done: false, createDate: new Date() }
    });
  };

  return (
    <button type='button' onClick={handleAddTodo}>
      Add
    </button>
  );
};

const Checkbox = ({ done, dispatch, id }) => {
  return <input type='checkbox' checked={done} onChange={() => dispatch({ type: 'PATCH', id })} />;
};

const TodoItem = props => {
  return (
    <div>
      <Checkbox done={props.done} dispatch={props.dispatch} id={props.id} />
      <span className='desc'>{props.desc}</span>
      <button onClick={() => props.dispatch({ type: 'DELETE', id: props.id })}>Remove</button>
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

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <StyledTodoContainer>
      <div className='header-container'>
        <Todo.Header
          dispatch={dispatch}
          inputValue={inputValue}
          setInputValue={setInputValue}
          generateId={generateId}
        />
        <Todo.Body todos={state.todos} dispatch={dispatch} />
      </div>
    </StyledTodoContainer>
  );
};

Todo.Header = ({ dispatch, inputValue, setInputValue, generateId }) => (
  <div id='myDIV'>
    <h2>My To Do List</h2>
    <Input inputValue={inputValue} setInputValue={setInputValue} />
    <Button
      dispatch={dispatch}
      inputValue={inputValue}
      generateId={generateId}
      setInputValue={setInputValue}
    >
      Add
    </Button>
  </div>
);

Todo.Body = props => {
  const { todos } = props;
  return (
    <ul id='myUL'>
      {todos.map(todo => {
        return (
          <TodoItem
            key={`todo-` + todo.id}
            id={todo.id}
            desc={todo.desc}
            done={todo.done}
            dispatch={props.dispatch}
          ></TodoItem>
        );
      })}
    </ul>
  );
};
export default Todo;
