import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import TodoApp   from 'components/app';
import TodoModel from 'models/todoModel.js';

const model = new TodoModel('react-todos');

function render() {
  React.render(
    <TodoApp model={model}/>,
    document.getElementsByClassName('todoapp')[0]
  );
}

model.subscribe(render);

render();
