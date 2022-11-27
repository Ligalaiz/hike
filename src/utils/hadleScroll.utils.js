const showHeader = () => {
  const header = document.getElementById('header');

  if (window.pageYOffset > 200) {
    if (!header.classList.contains('active')) {
      header.classList.add('active');
    }
  } else {
    header.classList.remove('active');
  }
};

const hadleScroll = () => showHeader();

export { hadleScroll };
