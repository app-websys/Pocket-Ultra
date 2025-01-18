async function ClicktoCreate() {
  const createDiv = document.querySelector('#createBG');

  if (createDiv) {
    console.log('hello');
    createDiv.style.display = "flex";
    await esperar(300);
    createDiv.style.opacity = 1;
  }
}

async function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function LeaveMenu() {
  const createDiv = document.querySelector('#createBG');

if (createDiv) {
  console.log('hello');
  createDiv.style.opacity = 0;
  await esperar(300);
  createDiv.style.display = "none";
}
}


const blockContainer = document.getElementById('projects');
const addBlockButton = document.getElementById('CreateButton');
const blockimage = document.getElementById('imageProject');

// Carrega os blocos salvos do localStorage
function loadBlocks() {
  const savedBlocks = JSON.parse(localStorage.getItem('blocks')) || [];
  blockContainer.innerHTML = '';
  savedBlocks.forEach((block, index) => createBlockElement(block.image || 'pocketultra.png', index));
}

// Cria um elemento de bloco apenas com a imagem
function createBlockElement(imageSrc, index) {
  const block = document.createElement('div');
  block.className = 'projects';

  // Adiciona a imagem ao bloco
  const img = document.createElement('img');
  img.src = imageSrc;

  img.appendChild(block);

  // Clique redireciona para a edição
  block.onclick = () => {
    window.location.href = `edit.html?index=${index}`;
  };

  blockContainer.appendChild(block);
}

// Adiciona um novo bloco com imagem padrão
async function CreateProject() {
  
  
  const createDiv = document.querySelector('#createBG');
  let ProjectName = document.getElementById("name");
  let ProjectContent = document.createElement('div');
  let horizontal = document.getElementById("Horizontal");
  let numberofproject = localStorage.getItem("projectsNumber")
  let rotate = false;
  if (horizontal.checked) {
    rotate = true;
    console.log(rotate);
  } else {
    rotate = false
  }
if (createDiv) {
  
  createDiv.style.opacity = 0;
  await esperar(300);
  createDiv.style.display = "none";
}
  const blocks = JSON.parse(localStorage.getItem('blocks')) || [];
  blocks.push({ name: `${ProjectName.value}`, code: `
  <?xml version="1.0" encoding="UTF-8" standalone="yes" ?>
<program>
  <header>
    <applicationBuildName></applicationBuildName>
    <applicationBuildNumber>0</applicationBuildNumber>
    <applicationBuildType>signedRelease</applicationBuildType>
    <applicationName>Pocket Code</applicationName>
    <applicationVersion>1.3.0</applicationVersion>
    <catrobatLanguageVersion>1.13</catrobatLanguageVersion>
    <dateTimeUpload></dateTimeUpload>
    <description></description>
    <deviceName>moto e13</deviceName>
    <isCastProject>false</isCastProject>
    <landscapeMode>` + rotate + `</landscapeMode>
    <listeningLanguageTag></listeningLanguageTag>
    <mediaLicense></mediaLicense>
    <notesAndCredits></notesAndCredits>
    <platform>Android</platform>
    <platformVersion>33</platformVersion>
    <programLicense></programLicense>
    <programName>` + ProjectName.value + `</programName>
    <remixOf></remixOf>
    <scenesEnabled>true</scenesEnabled>
    <screenHeight>1523</screenHeight>
    <screenMode>STRETCH</screenMode>
    <screenWidth>720</screenWidth>
    <tags></tags>
    <url></url>
    <userHandle></userHandle>
  </header>
  <settings/>
  <scenes>
    <scene>
      <name>Cena</name>
      <objectList>
        <object type="Sprite" name="Fundo">
          <lookList/>
          <soundList/>
          <scriptList/>
          <nfcTagList/>
          <userVariables/>
          <userLists/>
          <userDefinedBrickList/>
        </object>`, image: 'pocketultra.png' });
  localStorage.setItem('blocks', JSON.stringify(blocks));
  loadBlocks();
}

addBlockButton.onclick = CreateProject;
loadBlocks();

function horizontal() {
  let horizontal = document.getElementById("vertical");
  horizontal.checked = false; // Corrigido para usar o valor booleano
}

function vertical() {
  let horizontal = document.getElementById("Horizontal");
  horizontal.checked = false; // Corrigido para usar o valor booleano
}