const tasks = (state, action) => {

  switch (action.type) {
    case 'ADD_TASK':
      let newTask = {
        name: action.data,
        id: +new Date
      };

      return state.concat([newTask]);

      break;
    default:
      return state || [];
      break;
  }
};

const store = Redux.createStore(Redux.combineReducers({
    tasks
}));

store.subscribe(() => {
  console.log(store.getState());
});


const App = (props) => {
  return ( <div className='app'>{ props.children }</div>);
}

const TaskList =  React.createClass({
    render() {
      return (
        <div>
          <h1>Task List</h1>

          <ul>
            {
              this.props.tasks.map((task, i) => <li key={i}> {task.name} </li>)
            }
          </ul>
        </div>
      );
    }
});

store.dispatch({
    type: 'ADD_TASK',
    data: 'numero xpto'
});

var state = store.getState();


ReactDOM.render(<App> <TaskList tasks={state.tasks}/> </App>, document.getElementById('root'));
