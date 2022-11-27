const handleAnchorClick = () => {
  const anchors = document.querySelectorAll('a[href^="#"]');

  function scrollTo(anchor, yOffset = 0) {
    const blockID = anchor.getAttribute('href');
    if (!document.querySelector(blockID)) return;
    const el = document.querySelector(blockID);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  for (let i = 0; i < anchors.length; i += 1) {
    const anchor = anchors[i];

    anchor.addEventListener('click', (evt) => {
      evt.preventDefault();

      scrollTo(anchor, -60);
    });
  }
};

export { handleAnchorClick };
