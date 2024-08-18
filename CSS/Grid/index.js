const hideSidebar = () => {
  const sidebarRef = document.querySelector(".sidebar");
  sidebarRef.classList.add("hide");
};
const showSidebar = () => {
  const sidebarRef = document.querySelector(".sidebar");
  sidebarRef.classList.remove("hide");
};

window.addEventListener("resize", () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 501) {
    showSidebar();
  }
});

