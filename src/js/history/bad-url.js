export const renderBadUrl = function () {
  const wrapper = document.createElement('div');
  wrapper.classList.add('bad-url');
  const title = document.createElement('h1');
  title.classList.add('bad-url__title');
  title.textContent = '404 Not found. ';
  const description = document.createElement('h2');
  description.classList.add('bad-url__description');
  description.textContent = 'Сторiнка не знайдена, спробуй ще!'
  wrapper.append(title, description);

  document.querySelector('.section').innerHTML = '';
  return document.querySelector('.section').append(wrapper);
};
//console.log(renderBadUrl);
