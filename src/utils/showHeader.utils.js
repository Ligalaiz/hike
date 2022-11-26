window.addEventListener('load', () => {
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
      if (!header.classList.contains('active')) {
        header.classList.add('active');
      }
    } else {
      header.classList.remove('active');
    }
  });
});
