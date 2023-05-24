// Get the sidebar element
var sidebar = document.getElementById("mySidebar");

// Add event listeners for mouseenter and mouseleave events
sidebar.addEventListener("mouseenter", showSidebar);
sidebar.addEventListener("mouseleave", hideSidebar);

function showSidebar() {
  // Adjust the left CSS property to expand the sidebar
  sidebar.style.left = "0";
}

function hideSidebar() {
  // Adjust the left CSS property to collapse the sidebar
  sidebar.style.left = "-230px";
}