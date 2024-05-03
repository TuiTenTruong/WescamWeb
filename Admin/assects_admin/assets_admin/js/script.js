const liMenu = document.querySelectorAll(".admin-sidebar-content > ul> li >a ");

for (let i = 0; i < liMenu.length; i++) {
  liMenu[i].addEventListener("click", (e) => {
    e.preventDefault();
    liMenu[i].parentNode.querySelector("ul").classList.toggle("active");
  });
}

var chitiet = function(index){
  location.href = `index_list_order_detail.html#index=`+index;
}