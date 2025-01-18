const menuButton = document.getElementById("configic");
const menu = document.getElementById("menu");

// Mostrar ou esconder o menu ao clicar no botão
menuButton.addEventListener("click", () => {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
    menu.style.transition = "0.1s";
    setTimeout(() => {
      menu.style.width = "250px";
      menu.style.height = "290px";
      menu.style.opacity = 1;
      
    }, 50);
  } 
});

// Esconder o menu ao clicar fora dele
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && event.target !== menuButton) {
    menu.style.opacity = 0;
    menu.style.transition = "0.2s";
    menu.style.width = "0px";
    menu.style.height = "0px";
    setTimeout(() => {
      menu.style.display = "none";
     
    }, 200);
  }


});

//basics      ↑

function config() {
  const content = document.getElementById('content')
    // Aplica uma transformação 3D com escala e movimento
    
  
  setTimeout(() => {
    window.location.href = "config.html";
  },700)
  
}
async function terms() {
  let tBG = document.getElementById('TermsBG');
  
  if (tBG) {
    console.log('hello');
    tBG.style.display = "flex";
    await esperar(300);
    tBG.style.opacity = 1;
  }
  
}
      async function leaveterms() {
  let tBG = document.getElementById('TermsBG');

  if (tBG) {
  
    tBG.style.opacity = 0;
    await esperar(300);
    tBG.style.display = "none";
  }

}  