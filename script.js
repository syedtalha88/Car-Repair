window.onscroll = function() {myFunction()};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
let moonbtn= document.getElementById('moon');
let sunbtn= document.getElementById('sun');
let burger= document.getElementById('burg');
let navilist= document.getElementById('navlist');

function myFunction() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

function themechange(){
  document.body.classList.toggle('dark-theme');
  sunbtn.classList.toggle('hide');
  moonbtn.classList.toggle('show');
}
function navopen(){
  navilist.classList.toggle('navshow');
}