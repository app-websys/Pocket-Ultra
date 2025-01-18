function EditProject(project,infor) {
  const ProjectInfor = localStorage.setItem("projecInfor",project,infor)
  window.location.href = "Editor.html";
}

document.getElementById('game-icon').addEventListener("click", () => {
  document.getElementById('game-icon');
});