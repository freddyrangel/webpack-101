import App       from 'components/app';
import TodoModel from 'models/todoModel';

const model = new TodoModel('react-todos');

function render() {
  React.render(
    <App model={model}/>,
    document.getElementsByClassName('todoapp')[0]
  );
}

model.subscribe(render);

render();
