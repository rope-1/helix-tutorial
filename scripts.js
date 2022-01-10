function decorateTeaser(el) {
    const myDivs = el.querySelectorAll(':scope > div');

    console.log(myDivs, "decorateTeaser");
    
    myDivs[0].classList.add('title');
    myDivs[1].classList.add('subtitle');
    myDivs[2].classList.add('image');
    myDivs[3].classList.add('description');
  }

  function decorateTeasers2(el) {
    const myDivs = el.querySelectorAll(':scope > div');

    console.log(myDivs, "decorateTeaser");
    myDivs[0].querySelectorAll(':scope > div')[0].classList.add('teaser');    
    myDivs[0].querySelectorAll(':scope > div > p')[0].classList.add('title');
    myDivs[0].querySelectorAll(':scope > div > p')[1].classList.add('subtitle');
    myDivs[0].querySelectorAll(':scope > div > p')[2].classList.add('description');
    myDivs[0].querySelectorAll(':scope > div > p')[3].classList.add('image');

    myDivs[1].querySelectorAll(':scope > div')[0].classList.add('teaser'); 
    myDivs[1].querySelectorAll(':scope > div > p')[0].classList.add('title');
    myDivs[1].querySelectorAll(':scope > div > p')[1].classList.add('subtitle');
    myDivs[1].querySelectorAll(':scope > div > p')[2].classList.add('description');
    myDivs[1].querySelectorAll(':scope > div > p')[3].classList.add('image');
  }


  function decorateTeasers3(el) {
    const myDivs = el.querySelectorAll(':scope > div');

    console.log(myDivs, "decorateTeaser");

    myDivs.forEach((myDiv) => {
        myDiv.querySelectorAll(':scope > div')[0].classList.add('teaser');    
        myDiv.querySelectorAll(':scope > div > p')[0].classList.add('title');
        myDiv.querySelectorAll(':scope > div > p')[1].classList.add('subtitle');
        myDiv.querySelectorAll(':scope > div > p')[2].classList.add('description');
        myDiv.querySelectorAll(':scope > div > p')[3].classList.add('image');    
    });
  }
  
  let els = document.querySelectorAll('.teaser');

  els.forEach((el) => {
    decorateTeaser(el);
  });

  els = document.querySelectorAll('.teasers-2');

  els.forEach((el) => {
    decorateTeasers2(el);
  });

  els = document.querySelectorAll('.teasers-3');

  els.forEach((el) => {
    decorateTeasers3(el);
  });
