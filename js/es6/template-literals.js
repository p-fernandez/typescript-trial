var container = document.getElementById('container');
var todo = {
    id: 123,
    name: 'Do the cleaning',
    completed: true,
};
container.innerHTML = `
  <div todo="${todo.id}" class="list-group-item">
    <i class="${todo.completed ? 'crossed' : ''}" />
    <span class="name">${todo.name}</span>
  </div>
`;
