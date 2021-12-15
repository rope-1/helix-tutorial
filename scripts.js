function decorateTeaser(el) {
    console.log(el);
  }
  
  const els = document.querySelectorAll('.teaser');
  els.forEach((el) => {
    decorateTeaser(el);
  });