
  const container = document.querySelector('.project');


  function scrollRight() {
    container.scrollBy({ left: 200, behavior: 'smooth' });
  }
  
  function scroilLeft() {
    container.scrollBy({left:-200, behavior: 'smooth' });
  }