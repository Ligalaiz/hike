document.addEventListener('click', (e) => {
  const { target } = e;

  if (target.closest('#dropDownBtn')) {
    const parent = target.closest('.guarantee-characteristic__btn-wrap');
    if (!parent.classList.contains('active')) {
      parent.classList.add('active');
      parent.classList.remove('close');
    } else {
      parent.classList.add('close');
      parent.classList.remove('active');
    }
  }
});
