//Sidebar Toogle Codes

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar(){
  if(!sidebarOpen){
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar(){
  if(sidebarOpen){
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}