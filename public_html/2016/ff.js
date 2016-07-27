new WOW().init();

var targetScrollY=0;
var scrollSpeed = 15;

window.onload = os;
window.onscroll = os;
function os() {
	var t = document.getElementById('top');
	if (window.scrollY > 1300) {
		t.style.display = 'block';
	} else {
		t.style.display = 'none';
	}
}

function scrollPage(Y){
	s(Y)
	toogleMenu();
}

function s(Y)
{
  targetScrollY = Y;
  screen_Y = Math.floor(window.scrollY);

  //Scroll Down
  if(screen_Y<Y){
    var myWindowScroll = setInterval(function(){ screen_Y = screen_Y+scrollSpeed;  if(screen_Y>=targetScrollY){ clearInterval(myWindowScroll); return;}    window.scrollTo(0, screen_Y); }, 1);
  }
  //Scroll Up
  if(screen_Y>Y){
    var myWindowScroll = setInterval(function(){
		screen_Y = screen_Y-scrollSpeed;
		if(screen_Y<=targetScrollY){
			clearInterval(myWindowScroll);
			return;
		}
		window.scrollTo(0, screen_Y);
	}, 1);
  } 
}

function showMenu() {
	document.getElementById('menu').src = 'images/close.png';
	document.getElementById('menuitems').className = '';
}
function hideMenu() {
	document.getElementById('menu').src = 'images/menu.png';
	document.getElementById('menuitems').className = 'close';
}
function isOpened(mi){
	return mi.className == '';
}
function toogleMenu(){
	var mn = document.getElementById('menu');
	var mi = document.getElementById('menuitems');
	if (isOpened(mi))
		hideMenu();
	else
		showMenu();
}
document.getElementById('menuitems').onclick = hideMenu;
