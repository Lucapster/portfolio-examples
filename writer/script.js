const filterButtons = document.querySelectorAll('[data-filter]');
const pieces = document.querySelectorAll('[data-category]');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach(item => {
      item.setAttribute('aria-pressed', String(item === button));
    });

    pieces.forEach(piece => {
      piece.hidden = filter !== 'all' && piece.dataset.category !== filter;
      if (!piece.hidden) visibleCount += 1;
    });

    document.querySelector('#result-count').textContent =
      `Showing ${visibleCount} ${visibleCount === 1 ? 'piece' : 'pieces'}.`;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
