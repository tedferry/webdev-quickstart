import './scss/main.scss';

function component() {
  const element = document.createElement('div');

  element.textContent = 'Webdev Quickstart';

  return element;
}

document.body.appendChild(component());
