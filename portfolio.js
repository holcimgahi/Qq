
  const buttons = document.querySelectorAll('.butt');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active')); // remove from all
      btn.classList.add('active'); // add to clicked one
    });
  });
