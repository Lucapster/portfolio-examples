const projects = {
  bloom: {
    title: 'Bloom',
    description: 'An imagined skincare brand that makes an everyday routine feel a little more joyful.',
    approach: 'A warm color palette, an oversized flower, and expressive serif typography give this identity a friendly character. The concept carries across packaging and a simple digital storefront.'
  },
  form: {
    title: 'Form & Feeling',
    description: 'A digital showroom concept for thoughtful objects and the people who make them.',
    approach: 'Sculptural shapes and earthy colors put the products at the center. Editorial typography and generous space create a quiet, considered browsing experience.'
  },
  good: {
    title: 'Good Company',
    description: 'An independent journal concept about connection, community, and everyday creativity.',
    approach: 'Big type and a sunny palette make a welcoming first impression. Flexible layouts leave room for interviews, photo essays, and the occasional happy accident.'
  }
};

const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-description').textContent = project.description;
    document.querySelector('#dialog-approach').textContent = project.approach;
    dialog.showModal();
  });
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
document.querySelector('#year').textContent = new Date().getFullYear();
