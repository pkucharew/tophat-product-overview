// Add class to body tag when page is scrolled down
window.onscroll = function changeClass(){
	var scrollPosY = window.pageYOffset | document.body.scrollTop;

	if(scrollPosY > 100) {
	      document.body.className = ('scrolled');
	} else if(scrollPosY <= 100) {
	     document.body.className =  (' ');
	}
}
