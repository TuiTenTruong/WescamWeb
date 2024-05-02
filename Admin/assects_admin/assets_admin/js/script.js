const liMenu = document.querySelectorAll(".admin-sidebar-content > ul> li >a ");

for (let i = 0; i < liMenu.length; i++) {
  liMenu[i].addEventListener("click", (e) => {
    e.preventDefault();
    liMenu[i].parentNode.querySelector("ul").classList.toggle("active");
    console.log(liMenu[i].parentNode.querySelector("ul"));
  });
}
